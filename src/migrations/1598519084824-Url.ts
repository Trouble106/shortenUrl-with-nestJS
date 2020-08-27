import { MigrationInterface, QueryRunner, TableIndex, Table } from 'typeorm';

export class Url1598519084824 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'question',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
        ],
      }),
      true,
    );
    await queryRunner.createIndex(
      'user',
      new TableIndex({
        name: 'IDX_USER_firstName',
        columnNames: ['firstName'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
