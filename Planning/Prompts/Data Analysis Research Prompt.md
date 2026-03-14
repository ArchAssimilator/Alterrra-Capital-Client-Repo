---
title: Data Analysis Research Prompt
date: 2026-03-11
version: 3
author: RJ van Spaandonk
model: ChatGPT Deep Research
capability: Deep Research
tags:
  - prompt
  - research
  - datasets
  - alterra
final: false
---
# Prompt For ChatGPT Deep Research

Use Deep Research to find and rank the best current datasets for a live ChatGPT Advanced Data Analysis demo for Alterra Capital.

## Context

- Client: Alterra Capital
- Use case: potential acquisition analysis of Metair Investments
- Industry: automotive components, batteries, replacement parts, and aftermarket services
- Geography priority: South Africa, then Africa, then international
- Demo goal: identify a dataset that will support a strong 10-20 minute ADA demo for an investor audience

## Task

First, briefly understand Metair's business model and what kinds of data would best help assess its prospects.

Then find 5-8 actual named datasets that are relevant to:

- automotive components
- batteries
- aftermarket parts and services
- automotive manufacturing or distribution
- vehicle parc, trade, or other strong proxy indicators

Prioritise datasets that are:

- South Africa-relevant
- current and verifiable
- available in CSV, XLSX, or structured table form
- easy enough to clean for a live demo
- rich enough for at least 3 useful ADA analyses

Use official or primary sources first. Use Kaggle or synthetic datasets only if better real-world options are not available.

## Evaluation

Score each dataset from 1-5 on:

- industry relevance
- South Africa relevance
- ease of access
- data richness
- ADA demo value
- source credibility

Give a total score out of 30 and rank the datasets.

## Rules

- Verify that each dataset is currently available.
- Provide direct links.
- State whether access is free, paid, gated, or requires registration.
- Do not invent file format, structure, or date coverage.
- Label uncertain points as "inferred".
- Distinguish the original source from any mirror or reposted version.
- Avoid vague source categories; provide actual dataset names.

## Output

Structure the answer in this order:

1. Executive recommendation:
- best primary dataset
- best backup dataset
- why each works for a live ADA demo

2. Ranked dataset table with:
- rank
- dataset name
- geography
- source
- format
- date coverage
- access type
- cleaning effort
- best ADA use cases
- score /30
- link

3. Commentary on the top 5 datasets:
- relevance
- likely ADA analyses
- key limitations
- live-demo suitability

4. Demo ideas for the top 3:
- business question
- likely variables
- analyses to run in ADA
- charts to generate
- likely investor insight
- main risks

5. Final recommendation:
- which dataset to use first
- which to keep as backup
- suggested live analysis sequence

Write concisely, commercially, and for a business audience.
