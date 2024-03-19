import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOption = [
    {
      id: 1,
      name: "Basic Membership",
      features: [
        "Access to cardio equipment",
        "Access to strength training machines",
        "Locker room access",
        "Basic fitness assessment",
        "Discounts on select gym merchandise",
        "Free Wi-Fi access",
      ],
      price: 29.99,
    },
    {
      id: 2,
      name: "Standard Membership",
      features: [
        "All features of Basic Membership",
        "Access to group fitness classes (limited)",
        "Access to sauna and steam room",
        "Discounts on personal training sessions",
        "Monthly fitness challenges",
        "Nutritional guidance resources",
      ],
      price: 49.99,
    },
    {
      id: 3,
      name: "Premium Membership",
      features: [
        "All features of Standard Membership",
        "Unlimited access to group fitness classes",
        "Access to swimming pool",
        "Personalized training session (1/month)",
        "Monthly body composition analysis",
        "Priority booking for fitness classes",
      ],
      price: 79.99,
    },
    {
      id: 4,
      name: "VIP Membership",
      features: [
        "All features of Premium Membership",
        "24/7 gym access",
        "Nutritional counseling session (1/month)",
        "Access to exclusive VIP lounge",
        "Complimentary towel service",
        "Priority access to new gym equipment",
      ],
      price: 99.99,
    },
  ];
  return (
    <div>
      <h2 className="text-5xl my-6 text-center">Best Prices in the town</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-10 my-16">
        {priceOption.map((pOption) => (
          <PriceOption pOption={pOption} key={pOption.id} />
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
