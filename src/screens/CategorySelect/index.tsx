import React from 'react';
import { FlatList } from 'react-native';
import { Button } from '../../Components/Button';
import Head from '../../Components/Head';
import { categories } from '../../utils/categories';

import { Container, Content, Category, Icon, Title, Footer } from './styles';

export interface Category {
  key: string;
  name: string;
}

export interface Props {
  category: Category;
  setCategory: (value: Category) => void;
  closeSelectCategory: () => void;
}

export const CategorySelect = ({
  category,
  setCategory,
  closeSelectCategory,
}: Props) => {
  return (
    <Container>
      <Head title="Categorias" />
      <Content>
        <FlatList
          data={categories}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <Category
              onPress={() => setCategory(item)}
              isActive={category.name === item.name}
            >
              <Icon name={item.icon} />
              <Title>{item.name}</Title>
            </Category>
          )}
        />
        <Footer>
          <Button title="Selecionar" onPress={closeSelectCategory} />
        </Footer>
      </Content>
    </Container>
  );
};
