import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import queryVariables from "../../lib/query";

const SearchFilter = () => {
  const { query, push } = useRouter();
  const { variables } = queryVariables();
  const { season, seasonYear } = query;

  const seasonLink = (value) => {
    let str = "/?";
    str += `season=${value}`;
    if (seasonYear) str += `&seasonYear=${seasonYear}`;
    push(str);
  };

  const seasonYearLink = (value) => {
    let str = "/?";
    if (season) str += `season=${season}&`;
    str += `seasonYear=${value}`;
    push(str);
  };

  const yearList = () => {
    let arr = [];
    let start = new Date().getFullYear() + 1;
    for (let i = start; i >= 1940; i--) {
      let jsx = (
        <MenuItem value={i} key={i}>
          {i}
        </MenuItem>
      );
      arr.push(jsx);
    }
    return arr;
  };
  return (
    <Box mb={2}>
      <FormControl>
        <InputLabel id="seasonLabel-label">Season</InputLabel>
        <Select
          labelId="seasonLabel-label"
          name="season"
          value={season || variables.season}
          label="Season"
          onChange={(e) => seasonLink(e.target.value)}
        >
          <MenuItem value="WINTER">Winter</MenuItem>
          <MenuItem value="SPRING">Spring</MenuItem>
          <MenuItem value="SUMMER">Summer</MenuItem>
          <MenuItem value="FALL">Fall</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ marginLeft: 1 }}>
        <InputLabel id="seasonYearLabel">Year</InputLabel>
        <Select
          labelId="seasonYearLabel"
          name="seasonYear"
          value={seasonYear || variables.seasonYear}
          label="Year"
          onChange={(e) => seasonYearLink(e.target.value)}
        >
          {yearList()}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SearchFilter;
