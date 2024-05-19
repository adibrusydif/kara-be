import { Column, Entity, ManyToOne , JoinColumn} from 'typeorm';
import { AbstractBaseEntity } from 'src/typeorm/baseEntity';
import { Class } from '../class/class.entity';

@Entity()
export class Profile extends AbstractBaseEntity {
    @Column({
      nullable: true,
    })
    nim: string;
  
    @Column({
      nullable: true,
    })
    name: string;
  
    @Column({
      nullable: true,
    })
    phone: string;

    @Column({
      nullable: true,
    })
    parent_phone: string;

    @Column({
      nullable: true,
    })
    parent_name: string;

    @Column({
      nullable: true,
    })
    gender: string;

    @Column({
      nullable: true,
    })
    height: string;
  
    @Column({
      nullable: true,
    })
    address: string;

    @Column({
      nullable: true,
    })
    image: string;

    @Column({
        nullable: true,
      })
    school: string;

    @Column({
        nullable: true,
        type: 'timestamp',
      })
    birthdate: Date;

    @Column({
        nullable: true,
      })
    class_id: number;

    @ManyToOne(() => Class, clazz => clazz.profiles)
    @JoinColumn({
      name: "class_id",
    })
    class: Class

  }
