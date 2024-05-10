import { Column, Entity, OneToOne , JoinColumn} from 'typeorm';
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

    @OneToOne(() => Class)
    @JoinColumn({
      name: "class_id",
    })
    class: Class
  }
