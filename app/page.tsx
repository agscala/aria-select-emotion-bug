"use client";

import styles from "./page.module.css";
import { css } from '@emotion/react';
import { Select, Label, Button } from 'react-aria-components';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* I render fine in SSR.  Delete the `Select` below to see that there aren't any errors */}
      <Button css={css({padding: 30})}>Hello!</Button>

      {/* Select won't render properly in SSR, possibly because of `Hidden` used in the Select component */}
      <Select>
        <Label css={css({fontWeight: 'bold'})}>Favorite Animal</Label>
      </Select>
    </main>
  );
}
