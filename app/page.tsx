"use client";

import styles from "./page.module.css";
import { css } from '@emotion/react';
import { Select, Label, Button } from 'react-aria-components';

export default function Home() {
  return (
    <main className={styles.main}>
      <Button css={css({padding: 30})}>Hello!</Button>

      <Select>
        <Label css={css({fontWeight: 'bold'})}>Favorite Animal</Label>
      </Select>
    </main>
  );
}
