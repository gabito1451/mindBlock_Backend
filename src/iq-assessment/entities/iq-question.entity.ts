import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { IQAnswer } from "./iq-answer.entity"
import { IqAttempt } from "./iq-attempt.entity"

@Entity("iq_questions")
export class IQQuestion {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column("text")
  questionText: string

  @Column("simple-array")
  options: string[]

  @Column()
  correctAnswer: string

  @Column("text", { nullable: true })
  explanation?: string

  @OneToMany(
    () => IQAnswer,
    (answer) => answer.question,
  )
  answers: IQAnswer[]

  @OneToMany(
    () => IqAttempt,
    (attempt) => attempt.question,
  )
  attempts: IqAttempt[]
}
