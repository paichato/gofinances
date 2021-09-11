import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { categories } from '../../utils/categories'
import { Container, Header, Title, Category, Icon, Name, Separator, Footer} from './styles'
import Button from '../../Components/Forms/Button'

interface Category{
    key:string;
    name:string;
}

interface Props{
    category:Category;
    setCategory:({}:Category)=>void;
    closeSelectCategory:()=>void;

}

export default function CategorySelect({category,setCategory,closeSelectCategory}:Props) {
    return (
        <Container>
            <Header>
                <Title>Categoria</Title>
            </Header>
            <FlatList data={categories} style={{flex:1, width:'100%'}} ItemSeparatorComponent={()=><Separator/>} keyExtractor={(item)=>item.key} renderItem={({item})=>(
                <Category>
                    <Icon name={item.icon}/>
                    <Name>{item.name}</Name>
                </Category>
            )} />
            <Footer>
                <Button title='Selecionar'/>
                    
              
            </Footer>
        </Container>
    )
}
