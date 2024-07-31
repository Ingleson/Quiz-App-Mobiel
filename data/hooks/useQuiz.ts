import { useState } from "react";
import allQuests from "../constants/quests";

export default function useQuiz() {
    const [indexQuest, setIndexQuest] = useState(0);
    const [responses, setResponses] = useState<number[]>([]);
    const [quests, setQuests] = useState(drawQuests())


    function drawQuests() {
        const questScrumbed = [...allQuests]
            .sort(() => Math.random() - 0.5)
            .slice(0, 10)
        return questScrumbed;
    }

    return {
        get quest() {
            return quests[indexQuest]
        },
        get pontuation() {
            return quests
                .map((p) => p.response)
                .map((r, i) => r === responses[i])
                .filter(Boolean).length
        },
        get totalQuests() {
            return quests.length
        },
        get concluded() {
            return indexQuest === quests.length
        },
        toRespond(response: number) {
            setResponses([...responses, response])
            setIndexQuest(indexQuest + 1)
        },
        restart() {
            setIndexQuest(0);
            setResponses([]);
            setQuests(drawQuests())
        }
    }
}