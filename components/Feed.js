import React from 'react';
import { View, FlatList, Text, Image, Linking, TouchableOpacity } from 'react-native';
import { styles } from '../styles/Styles';
import { dataFeed } from '../configFeed/data';

const DATA = [
    {
        id: '0',
        image: require('../assets/vacina.png'),
        link: 'https://www.instagram.com/p/COOMU_rlwFE/?igsh=ZHJwenVjam4xbTMw',

    },
    {
        id: '1',
        image: require('../assets/wppParto.png'),
        link: 'https://www.instagram.com/p/CzwIKMdLua2/?igsh=Y3FpcjgyNWZwdms5',
    },
    {
        id: '2',
        image: require('../assets/alimentacao.png'),
        link: 'https://aps.saude.gov.br/noticia/17979',

    },
    {
        id: '3',
        image: require('../assets/preNatal.png'),
        link: 'https://docctormed.com.br/pre-natal-entenda-a-importancia-e-saiba-como-faze-lo/',
    },
    {
        id: '4',
        image: require('../assets/wppGravidez.png'),
        link: 'https://seer.ufrgs.br/index.php/rgenf/article/view/133516/88918',

    }
]


const pressLink = (link) => {
    Linking.openURL(link)
}

export default function () {
    return (
        <View style={styles.ListStyle}>
            <FlatList
                data={dataFeed}
                //horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => pressLink(item.link)}>
                        <View style={styles.feedViewListStyle}>
                            <Image
                                source={item.image}
                                style={styles.feedImages}
                            />
                            <Text style={styles.feedTitle}>{item.title}</Text>
                            <View style={styles.feedContainer}>
                                <View style={styles.dataFeedView}>
                                    <Text style={styles.dataFeed}>{item.date}</Text>
                                </View>

                            </View>

                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

