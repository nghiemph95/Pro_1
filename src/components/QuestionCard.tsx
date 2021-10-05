
import React from "react";
//Type
import { AnswerObject } from '../App';
import { Wrapper, ButtonWraaper} from './QuestionCard.styles';

type Props = {
    question: string;
    answer: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined; //!!userAnswer = userAnswer ? true : false
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({question, answer, callback, userAnswer, questionNr, totalQuestions,
}) => (
    <Wrapper>
        <p className = "number">
            Question: {questionNr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question}} />

        <div>
            {answer.map(answer => (
                <ButtonWraaper 
                    key = {answer}
                    correct = {userAnswer?.correctAnswer === answer}
                    userClicked={userAnswer?.answer === answer}
                >
                    <button disabled = {!!userAnswer} value = {answer} onClick = {callback}> 
                        <span dangerouslySetInnerHTML = {{ __html: answer}} />
                    </button>
                </ButtonWraaper>
            ))}
        </div>
    </Wrapper>
);

export default QuestionCard