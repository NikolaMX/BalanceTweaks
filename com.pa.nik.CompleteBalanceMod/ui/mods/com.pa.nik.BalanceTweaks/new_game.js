var BalanceFixLoaded;

if (!BalanceFixLoaded) {
  BalanceFixLoaded = true;

  function quellerAIPersonalities() {
    try {
      

      _.defer(function () {
        model.localChatMessage(
          loc("!LOC:Queller AI"),
          loc(
           "!LOC:Made by NikolaMX and a bunch of other top players. Adjusts and corrects some unit stats in minor ways to make them play as they should. Full changelog of the latest build: https://docs.google.com/document/d/1pKSYOdUPrl2ENDMOCQkByaZPJMpFH4ovQYEL9XaNRQA/edit?usp=sharing"
          )
        );
      });
    } catch (e) {
      console.error(e);
      console.error(JSON.stringify(e));
    }
  }
  BalanceFix();
}