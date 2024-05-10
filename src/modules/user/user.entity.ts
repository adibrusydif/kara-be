import { Column, Entity, OneToOne , JoinColumn} from 'typeorm';
import { AbstractBaseEntity } from 'src/typeorm/baseEntity';
import { Profile } from './profile.entity';

@Entity()
export class User extends AbstractBaseEntity {
  @Column({
    nullable: false,
  })
  role: string;

  @Column({
    nullable: false,
    unique: true,
  })
  email: string;

  @Column({
    nullable: false,
  })
  password: string;

  @Column({
    nullable: false,
  })
  profile_id: number;

  @OneToOne(() => Profile)
  @JoinColumn({
    name: "profile_id",
  })
  profile: Profile
}

