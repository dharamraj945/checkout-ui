import React, { useState } from "react";
import {
  reactExtension,
  TextField,
  useApplyMetafieldsChange,
  useMetafield,
  BlockStack,
  Link,
  Text,
  Icon,
  Pressable,
  Tooltip,
} from "@shopify/ui-extensions-react/checkout";

// Set the entry point for the extension
export default reactExtension("purchase.checkout.block.render", () => <App />);

function App() {
  const btnClick = () => {
    console.log("hello");
  };

  // Define the metafield namespace and key
  const metafieldNamespace = "custom";
  const metafieldKey = "checkout";

  // Get a reference to the metafield
  const cutomField = useMetafield({
    namespace: metafieldNamespace,
    key: metafieldKey,
  });
  // Set a function to handle updating a metafield
  const applyMetafieldsChange = useApplyMetafieldsChange();

  return (
    <>
      <TextField
        type="text"
        required="true"
        label="Nickname For Order (Optional)"
        onChange={(value) => {
          // Apply the change to the metafield
          applyMetafieldsChange({
            type: "updateMetafield",
            namespace: metafieldNamespace,
            key: metafieldKey,
            valueType: "string",
            value,
          });
        }}
        value={cutomField?.value}
        accessory={
          <Pressable
            overlay={
              <Tooltip>
                Give your order a nickname for easy reference or
                reordering in the future
              </Tooltip>
            }
          >
            <Icon source="questionFill" />
          </Pressable>
        }
      />

      <BlockStack inlineAlignment="center">
        <Text size="medium">
          If you believe you are tax exempt, please fill out and upload your tax
          exempt form on this <Link onClick={this.btnClick}>page</Link>
        </Text>
      </BlockStack>
    </>
  );
}
