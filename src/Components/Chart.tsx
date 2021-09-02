import React from "react";
import { View, Text, Dimensions } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { t } from "react-native-tailwindcss";
const Chart = ({data}:any) => {
  return (
    <View style={[t.mY16]}>
      <LineChart
        withInnerLines={false}
        withOuterLines={false}
        fromZero={true}
        withHorizontalLabels={false}
        data={{
          labels: ["January", "February", "March", "April"],
          datasets: [
            {
              data: data,
            },
          ],
        }}
        width={Dimensions.get("window").width * 0.85} // from react-native
        height={Dimensions.get("window").height * 0.3}
        chartConfig={{
          backgroundGradientFrom: "#fff",
          backgroundGradientFromOpacity: 0,
          backgroundGradientTo: "#fff",
          backgroundGradientToOpacity: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          strokeWidth: 2, // optional, default 3
          barPercentage: 0.7,
          fillShadowGradientOpacity: 0,
          propsForVerticalLabels: {
            fill: "#777",
          },
        }}
        bezier
        style={{
          borderRadius: 10,
          backgroundColor: "#fff",
        }}
      />
    </View>
  );
};

export default Chart;
