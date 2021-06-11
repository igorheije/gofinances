import React, { createContext, useContext, useEffect, useState } from 'react';
import { AsyncStorage } from 'react-native';
import { Category } from '../screens/CategorySelect';

interface TransactionProps {
  id: string;
  name: string;
  amount: string;
  category: Category;
  transactionType: 'up' | 'down';
  date: Date;
}

interface TransactionsContextProps {
  transactions: TransactionProps[];
  setTransactions: React.Dispatch<React.SetStateAction<TransactionProps[]>>;
  saveTransactions: (datas: TransactionProps) => Promise<boolean>;
  loadingTransactions: () => Promise<void>;
}

const TransactionsContext = createContext({} as TransactionsContextProps);

const TransectionsProvider: React.FunctionComponent = ({ children }) => {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);
  const dataKey = '@gofinances:transactions';

  async function loadingTransactions() {
    try {
      const data = await AsyncStorage.getItem(dataKey);
      const AllTransactions = data ? JSON.parse(data) : [];
      setTransactions(AllTransactions);
    } catch (err) {
      console.log('err', err.message);
    }
  }
  loadingTransactions();

  async function saveTransactions(datas: TransactionProps) {
    try {
      const dataFormated = [...(transactions ?? []), datas];
      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormated));
      return true;
    } catch (err) {
      return false;
    }
  }

  return (
    <TransactionsContext.Provider
      value={{
        loadingTransactions,
        transactions,
        setTransactions,
        saveTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

const useTransactions = () => useContext(TransactionsContext);

export { useTransactions, TransectionsProvider };
