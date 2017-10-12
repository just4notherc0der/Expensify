import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

// removeExpense
test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  /* This test will ail because toBe compares 2 values with ===, and 2 objects are never the same when comared with === operator
  expect(action).toBe({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });*/
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

// editExpense
test('should setup edit expense action object', () => {
  const action = editExpense('someID123', { note: 'Now Note' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'someID123',
    updates: {
      note: 'Now Note'
    }
  });
});

// addExpense
test('Should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 102800,
    createdAt: 1000,
    note: 'This was last months rent'
  };
  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String) // because id is dynamically assigned
    }
  });
});


test('Should setup add expense action object with default values', () => {
  const action = addExpense();

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  });
});
