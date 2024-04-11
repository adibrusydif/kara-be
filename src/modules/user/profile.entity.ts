import { Column, Entity, OneToOne , JoinColumn} from 'typeorm';
import { AbstractBaseEntity } from 'src/typeorm/baseEntity';
import { Class } from '../class/class.entity';

@Entity()
export class Profile extends AbstractBaseEntity {
    @Column({
      nullable: false,
    })
    nim: string;
  
    @Column({
      nullable: false,
    })
    name: string;
  
    @Column({
      nullable: false,
    })
    phone: string;
  
    @Column({
      nullable: false,
    })
    address: string;

    @Column({
        nullable: false,
      })
    school: string;

    @Column({
        nullable: false,
        type: 'timestamp',
      })
    birthdate: Date;

    @Column({
        nullable: false,
      })
    class_id: number;

    @OneToOne(() => Class)
    @JoinColumn({
      name: "class_id",
    })
    class: Class
  }
