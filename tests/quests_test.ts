import {
  Clarinet,
  Tx,
  Chain,
  Account,
  types
} from 'https://deno.land/x/clarinet@v1.0.0/index.ts';
import { assertEquals } from 'https://deno.land/std@0.90.0/testing/asserts.ts';

Clarinet.test({
  name: "Ensure can create new quest",
  async fn(chain: Chain, accounts: Map<string, Account>) {
    const wallet_1 = accounts.get("wallet_1")!;
    // Test implementation
  },
});

Clarinet.test({
  name: "Ensure can complete quest and receive rewards",
  async fn(chain: Chain, accounts: Map<string, Account>) {
    // Test implementation  
  },
});
