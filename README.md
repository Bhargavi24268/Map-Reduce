# MapReduce Word Count Web Application

## 📌 Project Overview

This project demonstrates the **MapReduce concept** using a simple **Word Count Web Application**.
The system processes text input or uploaded text files and calculates the frequency of each word.
The results are displayed both as **text output** and as a **bar chart visualization**.

---

## 🚀 Features

* Manual text input
* Upload `.txt` files for analysis
* Word frequency calculation
* Total word count display
* MapReduce simulation (Map → Shuffle → Reduce)
* Data visualization using Chart.js
* Clean and user-friendly interface

---

## 🛠️ Technologies Used

* **HTML** – Structure of the web page
* **CSS** – Styling and UI design
* **JavaScript** – MapReduce logic and interactivity
* **Chart.js** – Visualization of word frequency

---

## ⚙️ How It Works

### 1. Map Phase

The input text is split into individual words and converted into key-value pairs.

Example:
hello → (hello, 1)

### 2. Shuffle Phase

Words with the same key are grouped together.

Example:
hello → [1,1]

### 3. Reduce Phase

Values are summed to calculate the total frequency of each word.

Example:
hello → 2

---

## 📂 Project Structure

```
wordcount-project
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## ▶️ How to Run the Project

1. Download or clone the repository
2. Open the project folder
3. Double-click **index.html**
4. Enter text or upload a `.txt` file
5. Click **Run MapReduce** to see the results

---

## 🌐 Live Demo

After deploying on GitHub Pages, your project will be available at:

https://bhargavi24268.github.io/Map-Reduce/

---

## 📊 Example Output

Input:

```
Hello world hello
```

Output:

```
Total Words: 3
hello : 2
world : 1
```

A bar chart will also be displayed to visualize word frequency.

---

## 🎯 Applications

* Text analysis
* Big data preprocessing
* Search engine indexing
* Document analytics
* Log file analysis

---

## 👩‍💻 Author

**Bhargavi Chepuru**

Computer Science Engineering Student
