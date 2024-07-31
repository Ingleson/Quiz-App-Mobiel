import Quest from "@/components/quiz/Quest";
import Result from "@/components/quiz/Result";
import Logo from "@/components/template/Logo";
import Page from "@/components/template/Page";
import useQuiz from "@/data/hooks/useQuiz";
import { Text, View } from "react-native";

export default function Index() {

  const {quest, toRespond, concluded, pontuation, totalQuests, restart} = useQuiz();

  return (
    <Page>
      <View style={{gap: 30}}>
        <Logo/>
        {concluded ? (
          <Result 
            pontuation={pontuation} 
            totalQuests={totalQuests} 
            restart={restart}/>
        ) : (
          <Quest 
            quest={quest} 
            selectedOption={toRespond}/>
        )}
      </View>
    </Page>
  );
}
