export default () => {
  try {
    const savedCategories = localStorage.getItem('categories');
    const savedExpenses = localStorage.getItem('expenses');
    if (!savedCategories || !savedExpenses) {
      return {};
    }
    const categories = JSON.parse(savedCategories);
    const expenses = JSON.parse(savedExpenses);
    return { categories, expenses };
  } catch (err) {
    return {};
  }
};
