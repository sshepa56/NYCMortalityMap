# Community District Death Counts and Rates Demographics 

[← Back to home](README.md)

## Gender and Age Distribution by Community District
Description 

<p align="center">
  <img
    src="DeathCountsbyGenderBarChartVertical.png"
    alt="Death Counts by Gender and Community District"
    width="100%"
  />
</p>

---

## Distribution of Cause of Death
Description
<p align="center">
  <img
    src="DistributionofDeathsbyCause2023Vertical.png"
    alt="Distribution of Deaths by Cause and Community District"
    width="100%"
  />
</p>
  

## Cause of Death by Community District: Scatter Plot
Description 
<p align="center">
  <img
    src="CauseofDeathbyCommunityDistrictScatterplot.png"
    alt="Cause of Death by Community District Scatterplot"
    width="100%"
  />
</p>



### Tables

Markdown tables use `|` to separate columns, and a row of dashes under the header row. Add a `:` on the right side of the dashes to right-align a column, which makes numbers easier to compare:

```markdown
|       | objectID  | isHighlight |
| ----- | --------: | ----------: |
| count | 492.00    | 492.00      |
| mean  | 338124.42 | 0.08        |
```

Here's a full example: 

|       | objectID  | isHighlight | accessionYear | isPublicDomain | objectBeginDate | objectEndDate | county | isTimelineWork |
| ----- | --------: | ----------: | ------------: | -------------: | --------------: | ------------: | -----: | -------------: |
| count | 492.00    | 492.00      | 489.00        | 492.00         | 492.00          | 492.00        | 0.00   | 492.00         |
| mean  | 338124.42 | 0.08        | 1935.58       | 0.85           | 25.12           | 117.55        | NaN    | 0.13           |
| std   | 150547.31 | 0.26        | 37.74         | 0.36           | 1319.63         | 1242.36       | NaN    | 0.33           |
| min   | 10112.00  | 0.00        | 1871.00       | 0.00           | -7000.00        | -4000.00      | NaN    | 0.00           |
| 25%   | 247556.75 | 0.00        | 1910.00       | 1.00           | -550.00         | -485.00       | NaN    | 0.00           |
| 50%   | 253507.00 | 0.00        | 1926.00       | 1.00           | -299.00         | -200.00       | NaN    | 0.00           |
| 75%   | 469534.00 | 0.00        | 1966.00       | 1.00           | 1539.50         | 1547.00       | NaN    | 0.00           |
| max   | 897321.00 | 1.00        | 2023.00       | 1.00           | 2005.00         | 2005.00       | NaN    | 1.00           |

**Tip:** You don't have to type tables by hand. pandas can write a Markdown table for you. Run this in your notebook and paste the result into your page:

```python
print(df.describe().round(2).to_markdown())
```

(`to_markdown()` needs the `tabulate` package: `conda install tabulate`.)


---

Next: [Code Examples →](embedding-code.md)
