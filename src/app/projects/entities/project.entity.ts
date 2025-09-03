import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum ProjectStatus {
  Pending = 'pending',
  Active = 'active',
  Cancelled = 'cancelled',
  Completed = 'completed',
}

@Entity()
export class Project {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'timestamp', nullable: true })
  startedAt: Date | null;

  @Column({ type: 'timestamp', nullable: true })
  finishedAt: Date | null;

  @Column({ type: 'enum', enum: ProjectStatus, default: ProjectStatus.Pending })
  status: ProjectStatus;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;

  constructor(props?: {
    name: string;
    startedAt?: Date | null;
    finishedAt?: Date | null;
  }) {
    if (props) {
      Object.assign(this, props);
    }
  }
}
