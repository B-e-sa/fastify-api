import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn
} from "typeorm";
import { Post } from "../../../posts/infra/typeorm/Post";
import { User } from "../../../user/infra/http/typeorm/User";

@Entity('comments')
export class Comment {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ type: "varchar", length: 300 })
    text!: string;

    @CreateDateColumn()
    created_at!: Date;

    @ManyToOne(() => Post, (post) => post.comments)
    post!: Post

    @ManyToOne(() => User, (user) => user.comments)
    user!: User
}