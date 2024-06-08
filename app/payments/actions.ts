{/*"use server"

import { createClient } from "@/utils/supabase/server";

// reads the billing amount for a specific billing id from the billing table

export async function billingRead({ id }: { id: number }) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("billing")
    .select("service_fee")
    .eq("billing_id", id);
  if (error) {
    console.error("Error fetching record:", error.message);
  } else {
    console.log("Record fetched successfully!");
    return data;
  }
}*/}

{/*
export async function googlePayments() {
  const baseRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
  };

  const tokenizationSpecification = {
    type: "PAYMENT_GATEWAY",
    parameters: {
      gateway: "example",
      gatewayMerchantId: "exampleGatewayMerchantId",
    },
  };

  const allowedCardNetworks = [
    "AMEX",
    "DISCOVER",
    "INTERAC",
    "JCB",
    "MASTERCARD",
    "VISA",
  ];

  const allowedCardAuthMethods = ["PAN_ONLY", "CRYPTOGRAM_3DS"];

  const baseCardPaymentMethod = {
    type: "CARD",
    parameters: {
      allowedAuthMethods: allowedCardAuthMethods,
      allowedCardNetworks: allowedCardNetworks,
    },
  };

  const cardPaymentMethod = {
    ...baseCardPaymentMethod,
    tokenizationSpecification: tokenizationSpecification,
  };

  const paymentsClient = new google.payments.api.PaymentsClient({
    environment: "TEST",
  });

  const isReadyToPayRequest = {
    ...baseRequest,
    allowedPaymentMethods: [baseCardPaymentMethod],
  };

  paymentsClient
    .isReadyToPay(isReadyToPayRequest)
    .then(function (response: any) {
      if (response.result) {
        // add a Google Pay payment button
        const button = paymentsClient.createButton({
          onClick: () => {
            const paymentDataRequest = {
              ...baseRequest,
              allowedPaymentMethods: [cardPaymentMethod],
              transactionInfo: {
                totalPriceStatus: "FINAL",
                totalPrice: "123.45",
                currencyCode: "USD",
                countryCode: "US",
              },
              merchantInfo: {
                merchantName: "Example Merchant",
                merchantId: "12345678901234567890",
              },
            };
            paymentsClient.loadPaymentData(paymentDataRequest).then(function (paymentData: any) {
              // if using gateway tokenization, pass this token without modification
              const paymentToken = paymentData.paymentMethodData.tokenizationData.token;
              console.log("Payment Token:", paymentToken);
            }).catch(function (err: any) {
              "Error in loadPaymentData:"
              console.error(err);
            });
          },
          allowedPaymentMethods: [cardPaymentMethod],
        });
        const paymentForm = document.getElementById("payment-form");
        if (paymentForm) {
          paymentForm.appendChild(button);
        }
      }
    })
    .catch(function (err: any) {
      
      "Error in isReadyToPay:"
      console.error(err);
    });
}
*/}

{/*"use server"

import { createClient } from "@/utils/supabase/server";

// reads the billing amount for a specific id from the billing table
export async function billingRead({ id }: { id: number }) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("billing")
    .select()
    .eq("billing_id", id);
  if (error) {
    console.error("Error fetching record:", error.message);
  } else {
    console.log("Record fetched successfully!");
    return data;
  }
}

export async function getGooglePaymentRequest() {
  return {
    apiVersion: 2,
    apiVersionMinor: 0,
    merchantInfo: {
      merchantName: "Example Merchant",
      merchantId: "12345678901234567890",
    },
    allowedPaymentMethods: [
      {
        type: "CARD",
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["AMEX", "DISCOVER", "INTERAC", "JCB", "MASTERCARD", "VISA"],
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "example",
            gatewayMerchantId: "exampleGatewayMerchantId",
          },
        },
      },
    ],
    transactionInfo: {
      totalPriceStatus: "FINAL",
      totalPrice: "123.45",
      currencyCode: "USD",
      countryCode: "US",
    },
  };
}*/}




