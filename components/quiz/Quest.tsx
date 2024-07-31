import ModelQUest from '@/data/model/quest'
import { Text, View } from 'react-native'
import Statement from './Statement'
import Option from '@/components/quiz/Option'

export interface QuestProps {
    quest: ModelQUest
    selectedOption: (index: number) => void
}

export default function Quest(props: QuestProps) {
    return (
        <View style={{gap: 50}}>
            <Statement statement={props.quest.statement}/>  
            <View style={{gap: 10}}>
                {props.quest.options.map((option, index) => (
                    <Option
                        key={index}
                        index={index}
                        text={option}
                        OnPress={() => props.selectedOption(index)}
                    />
                ))}    
            </View>       
        </View>
    )
}