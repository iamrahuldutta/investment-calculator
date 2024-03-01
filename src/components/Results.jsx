import { calculateInvestmentResults, formatter } from "../util/investment.js";
export default function Results({ userInput }) {
  const resultData = calculateInvestmentResults(userInput);

  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;

  var data = resultData.map((yearData) => {
    const totalInterest =
      yearData.valueEndOfYear -
      yearData.annualInvestment * yearData.year -
      initialInvestment;

    const totalAmountAmountInvested = yearData.valueEndOfYear - totalInterest;
    return (
      <tr key={yearData.year}>
        <td>{yearData.year}</td>
        <td>{formatter.format(yearData.valueEndOfYear)}</td>
        <td>{yearData.interest}</td>
        <td>{formatter.format(totalInterest)}</td>
        <td>{formatter.format(totalAmountAmountInvested)}</td>
      </tr>
    );
  });

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>{data}</tbody>
    </table>
  );
}
