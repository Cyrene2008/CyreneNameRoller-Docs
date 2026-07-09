---
title: Balance Algorithm
description: Learn about CyreneNameRoller's smart balance rolling mechanism
---

# Balance Algorithm

CyreneNameRoller's core advantage is the **balance algorithm**, which ensures fair rolling and gives everyone a chance to be picked.

## Algorithm Principle

### Problem Scenario
In traditional random rolling with no-replacement sampling, everyone will eventually be picked once. But in practical applications, multiple rolls are often needed, which creates unfairness:

- Some people might be picked consecutively
- Others might "sit out" for long periods

### Solution
The balance algorithm uses **weighted probability** to solve this problem:

- People picked **fewer** times have **higher** probability next round
- People picked **more** times have **lower** probability next round

This way, in the long run, everyone's pick count will be more balanced.

## Fritsch-Carlson Interpolation Algorithm

CyreneNameRoller uses **Fritsch-Carlson monotone cubic Hermite interpolation algorithm** to calculate balanced probability.

### Algorithm Advantages
- **Monotonicity**: Curve won't oscillate, ensuring smooth probability changes
- **Predictable**: Intuitive curve shape control through control points
- **Precise**: Cubic Hermite interpolation provides accurate fitting

### Algorithm Implementation

```javascript
// Core parameters
{
  factor: 13.3,              // Balance factor, affects theoretical threshold
  maxThreshold: 3,           // Maximum threshold, probability stops increasing after this
  maxBoostPercent: 1200,     // Maximum boost percentage (1200% = 12x)
  points: [                  // Control points, define curve shape
    { x: 0.3, y: 150 },      // P1: 30% relative deficit = 150% boost
    { x: 1.5, y: 420 },      // P2: 150% relative deficit = 420% boost
    { x: 2.4, y: 800 }       // P3: 240% relative deficit = 800% boost
  ]
}
```

### Calculation Process

1. **Calculate relative deficit**:
   ```javascript
   // deficit = theoretical picks - actual picks
   const theoreticalThreshold = candidateCount / factor
   const relativeDeficit = deficit / theoreticalThreshold
   ```

2. **Hermite interpolation**:
   Use three control points for cubic Hermite interpolation to calculate boost percentage

3. **Apply limits**:
   - Don't exceed `maxBoostPercent`
   - Reach maximum value at `maxThreshold`

4. **Calculate actual probability**:
   ```javascript
   const boostedPercent = interpolateQuadratic(points, relativeDeficit)
   const actualProbability = baseProbability * (boostedPercent / 100)
   ```

## Curve Editor

The app includes a visual curve editor for intuitive balance curve adjustment:

### Editor Features
- **Drag control points**: Directly drag P1, P2, P3 to change curve shape
- **Numeric input**: Manually input coordinates for precise adjustment
- **Real-time preview**: See curve changes immediately after adjustment
- **Monotonic guarantee**: P0 fixed at (0, 100), P1, P2, P3 automatically maintain monotonicity

### Control Point Meanings
- **P0**: Fixed at (0, 100), meaning no deficit when probability is unchanged
- **P1**: First inflection point, determines curve starting slope
- **P2**: Second inflection point, determines curve mid-section shape
- **P3**: Third inflection point, determines curve saturation point

### Recommended Configurations

**Gentle Balance** (suitable for classroom rolling):
```json
{
  "points": [
    { "x": 0.3, "y": 150 },
    { "x": 1.5, "y": 420 },
    { "x": 2.4, "y": 800 }
  ]
}
```

**Aggressive Balance** (suitable for avoiding consecutive picks):
```json
{
  "points": [
    { "x": 0.2, "y": 250 },
    { "x": 0.8, "y": 600 },
    { "x": 1.5, "y": 1200 }
  ]
}
```

## Key Parameter Descriptions

### factor (Balance Factor)
- **Purpose**: Define denominator of theoretical threshold
- **Formula**: `Theoretical Threshold = People Count / factor`
- **Default**: 13.3
- **Lower**: Earlier balance trigger (aggressive)
- **Higher**: Later balance trigger (conservative)

### maxThreshold (Maximum Threshold)
- **Purpose**: After exceeding this value, probability stops increasing
- **Unit**: Pick count
- **Default**: 3
- **Lower**: Limited balance effect (conservative)
- **Higher**: Stronger balance effect (aggressive)

### maxBoostPercent (Maximum Boost Percentage)
- **Purpose**: Limit probability boost upper limit
- **Unit**: Percentage (100 = no boost, 1200 = 12x)
- **Default**: 1200
- **Lower**: Avoid extreme probabilities (conservative)
- **Higher**: Allow stronger balance effect (aggressive)

## Disable Balance Algorithm

If balance functionality is not needed, you can disable it in **Settings**:

1. Go to **Settings** page
2. Find **Balance Algorithm** section
3. Turn off **Enable Balance Algorithm** switch
4. Save settings

**Use Cases**:
- Fair lottery (pure random needed)
- Testing features
- Scenarios where fairness doesn't matter

## Performance Considerations

- Balance algorithm calculation overhead is minimal, performance impact is negligible
- The more people in the list, the more obvious the balance algorithm effect
- Recommended to use balance algorithm for lists with 10+ people

## Mathematical Principles Explained

### Hermite Interpolation

Hermite interpolation is a polynomial interpolation method that matches not only function values but also derivatives (slopes):

```
H(x) = h00(t)·y0 + h10(t)·m0·h + h01(t)·y1 + h11(t)·m1·h
```

Where:
- `t = (x - x0) / h`, `h = x1 - x0`
- `y0, y1` are endpoint function values
- `m0, m1` are endpoint derivatives
- `h00, h10, h01, h11` are Hermite basis functions

### Fritsch-Carlson Method

Fritsch-Carlson method ensures **monotonicity** of the interpolation curve:

1. Calculate initial derivatives
2. Check adjacent derivative signs
3. Adjust derivatives if necessary to avoid extrema
4. Ensure monotonic changes between control points

This is why CyreneNameRoller's balance curve won't have fluctuations.

## References

- [Fritsch, F. N., & Carlson, R. E. (1980). Monotone piecewise cubic interpolation. SIAM Journal on Numerical Analysis.](https://doi.org/10.1137/0717021)
- [Hermite interpolation - Wikipedia](https://en.wikipedia.org/wiki/Hermite_interpolation)

## License

This documentation is licensed under **CC BY-NC-SA 4.0**. See [LICENSE](https://creativecommons.org/licenses/by-nc-sa/4.0/) for details.