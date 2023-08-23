import { Dispatch, memo, SetStateAction } from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import { Category } from '../../constants';
import styles from './styles';

interface CategoriesProps {
    categories: Category[];
    selectedCategory?: string | null;
    onPressCategory: Dispatch<SetStateAction<string | null>>;
}

export const Categories = memo((props: CategoriesProps) => {
    const { categories, selectedCategory, onPressCategory } = props;

    return (
        <FlatList
            horizontal
            data={categories}
            keyExtractor={(item) => String(item?.value)}
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 12 }}
            renderItem={({ item, index }) => {
                const selected = selectedCategory === item?.value;
                const displayName = item?.label;

                return (
                    <TouchableOpacity
                        onPress={() => onPressCategory(item?.value)}
                        style={[
                            styles.itemContainer,
                            selected ? styles.selectedItemContainer : {},
                            index === 0 ? { marginLeft: 24 } : {},
                        ]}
                    >
                        <Text
                            style={[
                                styles.item,
                                selected ? styles.selectedItem : {},
                            ]}
                        >
                            {displayName}
                        </Text>
                    </TouchableOpacity>
                );
            }}
        />
    );
});
