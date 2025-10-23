from connection import get_books_df
import matplotlib.pyplot as plt

#Get data
df = get_books_df()

#Precentage
lang_percent = df['language'].value_counts(normalize=True) * 100

#True = series, False = not series
series_counts = df['series_id'].notna().value_counts()

# image and 2 axs
fig, axes = plt.subplots(1, 2, figsize=(12,6))  # 1 row, 2 columns

bar_labels = ['series', 'non_series']
bar_colors = ['tab:red', 'tab:blue']


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

plt.tight_layout()
plt.show()