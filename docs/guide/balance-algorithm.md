---
title: 平衡算法
description: 了解 CyreneNameRoller 的智能平衡点名机制
createTime: 2026/07/09 15:49:22
permalink: /guide/7shf5d2j/
---

# 平衡算法

CyreneNameRoller 的核心优势之一是**平衡算法**，它确保点名过程的公平性，让每个人都有被抽中的机会。

## 算法原理

### 问题场景
在传统的随机点名中，采用不放回抽取（抽取后不放回），最终所有人都会被抽中一次。但在实际应用中，经常需要多次抽取，这时就会出现不公平：

- 某些人可能连续被抽中
- 另一些人则长期"陪跑"

### 解决方案
平衡算法通过**加权概率**解决这个问题：

- 被抽中次数**越少**的人，下次被抽中的概率**越高**
- 被抽中次数**越多**的人，下次被抽中的概率**越低**

这样，长期来看，每个人的抽取次数会更加均衡。

## Fritsch-Carlson 插值算法

CyreneNameRoller 使用 **Fritsch-Carlson 单调三次 Hermite 插值算法**来计算平衡概率。

### 算法优势
- **单调性**：曲线不会出现振荡，保证概率变化平滑
- **可预测**：通过控制点直观地调整曲线形状
- **精确性**：三次 Hermite 插值提供精确的拟合

### 算法实现

```javascript
// 核心参数
{
  factor: 13.3,              // 平衡因子，影响理论阈值
  maxThreshold: 3,           // 最大阈值，超过此值后概率不再增加
  maxBoostPercent: 1200,     // 最大提升百分比（1200% = 12 倍）
  points: [                  // 控制点，定义曲线形状
    { x: 0.3, y: 150 },      // P1：相对不足量 0.3 时，概率提升 150%
    { x: 1.5, y: 420 },      // P2：相对不足量 1.5 时，概率提升 420%
    { x: 2.4, y: 800 }       // P3：相对不足量 2.4 时，概率提升 800%
  ]
}
```

### 计算流程

1. **计算相对不足量**：
   ```javascript
   // deficit = 理论抽取次数 - 实际抽取次数
   const theoreticalThreshold = candidateCount / factor
   const relativeDeficit = deficit / theoreticalThreshold
   ```

2. **Hermite 插值**：
   使用三个控制点进行三次 Hermite 插值，计算提升百分比

3. **应用限制**：
   - 不超过 `maxBoostPercent`
   - 在 `maxThreshold` 处达到最大值

4. **计算实际概率**：
   ```javascript
   const boostedPercent = interpolateQuadratic(points, relativeDeficit)
   const actualProbability = baseProbability * (boostedPercent / 100)
   ```

## 曲线编辑器

应用内置可视化曲线编辑器，可以直观地调整平衡曲线：

### 编辑器功能
- **拖动控制点**：直接拖动 P1、P2、P3 改变曲线形状
- **数值输入**：手动输入坐标精确调整
- **实时预览**：调整后立即看到曲线变化
- **单调保证**：P0 固定为 (0, 100)，P1、P2、P3 自动保持单调性

### 控制点含义
- **P0**：固定在 (0, 100)，即没有不足时概率不变
- **P1**：第一个拐点，决定曲线起步斜率
- **P2**：第二个拐点，决定曲线中段形态
- **P3**：第三个拐点，决定曲线尾端饱和点

### 推荐配置

**温和平衡**（适合课堂点名）：
```json
{
  "points": [
    { "x": 0.3, "y": 150 },
    { "x": 1.5, "y": 420 },
    { "x": 2.4, "y": 800 }
  ]
}
```

**强力平衡**（适合避免连续抽中）：
```json
{
  "points": [
    { "x": 0.2, "y": 250 },
    { "x": 0.8, "y": 600 },
    { "x": 1.5, "y": 1200 }
  ]
}
```

## 关键参数说明

### factor（平衡因子）
- **作用**：定义理论阈值的分母
- **公式**：`理论阈值 = 人数 / factor`
- **默认值**：13.3
- **调低**：更早触发平衡（激进）
- **调高**：更晚触发平衡（保守）

### maxThreshold（最大阈值）
- **作用**：超过此值后概率不再增加
- **单位**：抽取次数
- **默认值**：3
- **调低**：平衡效果有限（保守）
- **调高**：平衡效果更强（激进）

### maxBoostPercent（最大提升百分比）
- **作用**：限制概率提升上限
- **单位**：百分比（100 = 不提升，1200 = 12 倍）
- **默认值**：1200
- **调低**：避免极端概率（保守）
- **调高**：允许更强的平衡效果（激进）

## 禁用平衡算法

如果不需要平衡功能，可以在**设置**页禁用：

1. 进入 **设置** 页面
2. 找到 **平衡算法** 部分
3. 关闭 **启用平衡算法** 开关

禁用后，所有人的抽取概率完全相等（不放回抽取除外）。

## 性能考虑

- 平衡算法的计算开销很小，对性能影响微乎其微
- 点名人数越多，平衡算法的效果越明显
- 建议在 10 人以上的名单上使用平衡算法

## 数学原理详解

### Hermite 插值

Hermite 插值是一种多项式插值方法，不仅匹配函数值，还匹配导数（斜率）：

```
H(x) = h00(t)·y0 + h10(t)·m0·h + h01(t)·y1 + h11(t)·m1·h
```

其中：
- `t = (x - x0) / h`，`h = x1 - x0`
- `y0, y1` 是端点函数值
- `m0, m1` 是端点导数
- `h00, h10, h01, h11` 是 Hermite 基函数

### Fritsch-Carlson 方法

Fritsch-Carlson 方法确保插值曲线的**单调性**：

1. 计算初始导数
2. 检查相邻导数符号
3. 必要时调整导数，避免极值
4. 保证曲线在控制点间单调变化

这就是为什么 CyreneNameRoller 的平衡曲线不会出现波动的原因。

## 参考资料

- [Fritsch, F. N., & Carlson, R. E. (1980). Monotone piecewise cubic interpolation. SIAM Journal on Numerical Analysis.](https://doi.org/10.1137/0717021)
- [Hermite interpolation - Wikipedia](https://en.wikipedia.org/wiki/Hermite_interpolation)

## 许可证

本文档采用 **CC BY-NC-SA 4.0**（署名-非商业性使用-相同方式共享 4.0 国际）许可证。详见 [LICENSE](https://creativecommons.org/licenses/by-nc-sa/4.0/) 文件。