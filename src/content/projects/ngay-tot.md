---
title: Ngày Tốt
summary: A web app that picks auspicious dates by birth year, converts the Vietnamese lunar calendar and scores each day, entirely in the browser.
year: 2026
role: Author
stack: [React, TypeScript, Vite]
order: 5
pattern: orbits
repo: https://github.com/SonHoang2/ngay-tot
---

## Overview

Ngày Tốt converts the Vietnamese lunar calendar and computes traditional almanac factors for each day and birth year. It needs no server, and birth dates stay in the user's `localStorage`.

## Structure

The calendar logic is plain TypeScript with no React dependency, so it can be reused on a server or in a mobile app. It has three layers:

1. Astronomy and calendar: new moons, the 24 solar terms, solar to lunar conversion
2. Day and age rules
3. Scoring: weights for each activity live in a JSON file and can change without touching code

Almanac sites often disagree because they use different conventions, so the repo documents each one it chose. The interface supports Vietnamese, English, and light and dark themes.
