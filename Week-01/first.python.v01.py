# import libraries and packages
from wordcloud import WordCloud
import matplotlib.pyplot as plt 

# to do this on your own computer:
# download python

# to install packages:
# download pip 

# text for a word cloud based on a definition of "data"
text = """
information, parameter, translation, transcribe, facts, observations,
numbers, values, confiscation, collection, iteration, patterns, trends, 
forecasting, predict, structures, currywurst, categories
"""

# create a word cloud 
wordcloud = WordCloud(width=800, height=400, background_color="white").generate(text)

# use pyplot to create a "figure"
plt.figure(figsize=(10, 5))

plt.imshow(wordcloud, interpolation="bilinear")

plt.axis("off")

plt.savefig("wordcloud_data_definition.png", format="png")

plt.show()