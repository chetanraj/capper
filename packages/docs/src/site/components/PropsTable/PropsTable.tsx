import { Text } from '@capper-ui/react';
import styles from './PropsTable.module.css';

export type PropRow = {
  name: string;
  type: string;
  default?: string;
  description: string;
};

type PropsTableProps = {
  rows: PropRow[];
};

export function PropsTable({ rows }: PropsTableProps) {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <td>
                <Text as="code" size="sm" mono color="accent">
                  {row.name}
                </Text>
              </td>
              <td>
                <Text as="code" size="sm" mono color="muted">
                  {row.type}
                </Text>
              </td>
              <td>
                <Text as="code" size="sm" mono color="subtle">
                  {row.default ?? '-'}
                </Text>
              </td>
              <td>
                <Text as="span" size="sm" color="muted">
                  {row.description}
                </Text>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
