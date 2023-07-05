import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn
} from "typeorm";
import { Comment } from "../../../comments/infra/typeorm/Comment";
import { User } from "../../../user/infra/http/typeorm/User";

@Entity('posts')
export class Post {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ type: "varchar", length: 300 })
    text!: string;

    @Column({ default: 0 })
    likes!: number;

    @CreateDateColumn()
    created_at!: Date;

    @OneToMany(() => Comment, (comment) => comment.post)
    comments: Comment[] | undefined

    @ManyToOne(() => User, (user) => user.posts)
    user!: User
}