import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { categories } from '../../utils/categories'
import { Container, Header, Title, Category, Icon, Name, Separator, Footer} from './styles'
import Button from '../../Components/Forms/Button'

export interface Category{
    key:string;
    name:string;
}

interface Props{
    category:Category;
    setCategory:({}:Category)=>void;
    closeSelectCategory:()=>void;

}

export default function CategorySelect({category,setCategory,closeSelectCategory}:Props) {

    const handleCategorySelect=(category:Category)=>{
        setCategory(category);
    }

    return (
        <Container>
            <Header>
                <Title>Categoria</Title>
            </Header>
            <FlatList data={categories} style={{flex:1, width:'100%'}} ItemSeparatorComponent={()=><Separator/>} keyExtractor={(item)=>item.key} renderItem={({item})=>(
                <Category isActive={category.key===item.key} onPress={()=>handleCategorySelect(item)}>
                    <Icon name={item.icon}/>
                    <Name>{item.name}</Name>
                </Category>
            )} />
            <Footer>
                <Button onPress={closeSelectCategory} title='Selecionar'/>
                    
              
            </Footer>
        </Container>
    )
}
