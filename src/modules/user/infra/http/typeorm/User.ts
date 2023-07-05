import {
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    Entity,
    OneToMany
} from "typeorm";
import { Post } from "../../../../posts/infra/typeorm/Post";
import { Comment } from "../../../../comments/infra/typeorm/Comment";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ type: "varchar", length: 24 })
    username!: string;

    @Column({ type: 'varchar' })
    password!: string;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at: Date | undefined;

    @OneToMany(() => Comment, (comment) => comment.user)
    comments: Comment[] | undefined

    @OneToMany(() => Post, (post) => post.user)
    posts: Post[] | undefined
}