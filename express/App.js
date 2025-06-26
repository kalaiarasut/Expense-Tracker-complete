const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');


 
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const MONGO_URI = 'mongodb+srv://<user_name>:<password>@cluster0.vdkk8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';//Add your credentials

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });

const expenseDBSchema = new mongoose.Schema({
  title: {type:String,required:true},
  amount: {type:Number,required:true}
});
const Expense = mongoose.model('Expense', expenseDBSchema);

app.post('/expenses', async (req, res) => {
  try {
    const expense = new Expense(req.body);
    await expense.save();
    res.status(201).send(expense);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});


app.get('/expense', async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (error) {
    console.error('Error fetching expenses:', error);
    res.status(500).json({ error: 'Failed to fetch expenses' });
  }
});

app.put('/expense/:id', async (req, res) => {
  try {
    const updateExpense = await Expense.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updateExpense) {
      return res.status(400).json({ error: "Expense not found" });
    }
    res.json(updateExpense);
  } catch (error) {
    console.error('Error updating expenses:', error);
    res.status(500).json({ error: 'Failed to update expenses' });
  }
});

app.delete('/expense/:id', async (req, res) => {
  try {
    const deleted = await Expense.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "Expense not found" });
    }
    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete expense" });
  }
});

app.delete('/expenses', async (req, res) => {
  try {
    await Expense.deleteMany({});
    res.json({ message: "All expenses deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete all expenses" });
  }
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
