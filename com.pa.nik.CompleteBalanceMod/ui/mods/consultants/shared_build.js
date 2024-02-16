var newBuildScenario = {



    "/pa/units/land/radar_jammer/radar_jammer.json": ["utility", 0, { row: 0, column: 2 }]

  
}
if (Build && Build.HotkeyModel && Build.HotkeyModel.SpecIdToGridMap) {
    _.extend(Build.HotkeyModel.SpecIdToGridMap, newBuildScenario);
}