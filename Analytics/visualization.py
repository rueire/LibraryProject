from turtle import color
from connection import get_books_df
import matplotlib.pyplot as plt

#Get data
df = get_books_df()

#Precentage
lang_percent = df['language'].value_counts(normalize=True) * 100

#True = series, False = not series
series_counts = df['series_name'].notna().value_counts()
series_labels = ['Part of a series' if x else 'Not part of series' for x in series_counts.index]
series_values = series_counts.values

#all series (fillna = fill NaN)
all_series = df['series_name'].fillna('Not series').value_counts()

#=============================================

# image and 5 axs
#fig, axes = plt.subplots(1, 3, figsize=(15,6,))  # 1 row, 5 columns
#For series vs nonSeries
bar_labels = ['series', 'non_series']
bar_colors = ['tab:red', 'tab:blue']
#For SeriesByNumber
bar_labels2 = ['series1', 'series2', 'series3', 'series4', 'non_series']
bar_colors2 = ['tab:red', 'tab:blue', 'tab:grey', 'tab:green', 'tab:orange']

#============================================
"""
Charts one by one = no clipping
"""
plt.figure(figsize=(6,6))
plt.pie(lang_percent, labels=lang_percent.index, autopct='%1.1f%%')
plt.title("Languages")
plt.show()

plt.bar(series_labels, series_values,color=['tab:blue', 'tab:red'])
plt.ylabel("Number of books")
plt.title("Series vs Not Series")
plt.show()

plt.figure(figsize=(6,6))
plt.pie(all_series, labels=all_series.keys(), autopct='%1.1f%%')
plt.title("All series")
plt.show()

#===========================================
"""
# Too Tight, instead make 3 different images (above)


# Pie Chart
axes[0].pie(
    lang_percent,
    labels=lang_percent.index,
    autopct='%1.1f%%',
    startangle=90
)
axes[0].set_title("Books Languages")

# Bar Chart
axes[1].bar(
    bar_labels,
    series_counts.values,
    color=bar_colors
)
axes[1].set_title("Books in Series vs Non-Series")
axes[1].set_ylabel("Number of Books")

# Bar Chart
axes[2].bar(
    bar_labels2,
    all_series.values,
    color=bar_colors2
)
axes[2].set_title("Book Series")
axes[2].set_ylabel("Number of Books")

plt.tight_layout()
plt.show()"""

#=======================================00