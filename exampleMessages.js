const iosMessages = {
  "Step' One": `An assertion failed.
    Exception with Assertion: {
      "Assertion Criteria":  "assertWithMatcher:(((kindOfClass('UILabel') || kindOfClass('UITextField') || kindOfClass('UITextView')) && hasText('_NOT_PRESENT_')) || (kindOfClass('RCTTextView') && an object with accessibilityLabel "_NOT_PRESENT_"))",
      "Element Matcher":  "((!(kindOfClass('RCTScrollView')) && ((respondsToSelector(accessibilityIdentifier) && accessibilityID('heading')) && !(kindOfClass('UIAccessibilityTextFieldElement')))) || (((kindOfClass('UIView') || respondsToSelector(accessibilityContainer)) && parentThatMatches(kindOfClass('RCTScrollView'))) && ((kindOfClass('UIView') || respondsToSelector(accessibilityContainer)) && parentThatMatches(((respondsToSelector(accessibilityIdentifier) && accessibilityID('heading')) && !(kindOfClass('UIAccessibilityTextFieldElement')))))))"
    }


    Error Trace: [
      {
        "Description":  "Assertion with matcher [M] failed: UI element [E] failed to match the following matcher(s): [S]",
        "Description Glossary":    {
          "M":  "(((kindOfClass('UILabel') || kindOfClass('UITextField') || kindOfClass('UITextView')) && hasText('_NOT_PRESENT_')) || (kindOfClass('RCTTextView') && an object with accessibilityLabel "_NOT_PRESENT_"))",
          "E":  "<RCTTextView:0x7fcf6660e2e0; AX=Y; AX.id='heading'; AX.label='Step' One'; AX.frame={{24, 283.5}, {327, 29.5}}; AX.activationPoint={187.5, 298.25}; AX.traits='UIAccessibilityTraitStaticText'; AX.focused='N'; frame={{24, 0}, {327, 29.5}}; alpha=1>",
          "S":  "kindOfClass('UILabel'), kindOfClass('UITextField'), kindOfClass('UITextView'), accessibilityLabel was "Step' One" on <RCTTextView: 0x7fcf6660e2e0; reactTag: 15; text: Step' One frame = (24 0; 327 29.5); opaque = NO; layer = <CALayer: 0x6000020ee020>>"
        },
        "Error Domain":  "com.google.earlgrey.ElementInteractionErrorDomain",
        "Error Code":  "3",
        "File Name":  "GREYAssertions.m",
        "Function Name":  "+[GREYAssertions grey_createAssertionWithMatcher:]_block_invoke",
        "Line":  "75"
      }
    ]

    Hierarchy: <UIWindow:0x7fcf864156d0; AX=N; AX.frame={{0, 0}, {375, 667}}; AX.activationPoint={187.5, 333.5}; AX.traits='UIAccessibilityTraitNone'; AX.focused='N'; frame={{0, 0}, {375, 667}}; opaque; alpha=1>
      |--<RCTRootView:0x7fcf6660b340; AX=N; AX.frame={{0, 0}, {375, 667}}; AX.activationPoint={187.5, 333.5}; AX.traits='UIAccessibilityTraitNone'; AX.focused='N'; frame={{0, 0}, {375, 667}}; opaque; alpha=1>
      |  |--<RCTRootContentView:0x7fcf666212c0; AX=N; AX.label='Welcome to React Step' One Edit App.js to change this screen and then come back to see your edits. See Your Changes Press Cmd + R in the simulator to reload your app's code. Debug Press Cmd + D in the simulator or Shake your device to open the React Native debug menu. Learn More Read the docs to discover what to do next: The Basics Explains a Hello World for React Native. Style Covers how to use the prop named style which controls the visuals. Layout React Native uses flexbox for layout, learn how it works. Components The full list of components and APIs inside React Native. Navigation How to handle moving between screens inside your application. Networking How to use the Fetch API in React Native. Help Need more help? There are many other React Native developers who may have the answer. Follow us on Twitter Stay in touch with the community, join in on Q&As and more by following React Native on Twitter.'; AX.frame={{0, 0}, {375, 667}}; AX.activationPoint={187.5, 333.5}; AX.traits='UIAccessibilityTraitNone'; AX.focused='N'; frame={{0, 0}, {375, 667}}; opaque; alpha=1>
      |  |  |--<RCTView:0x7fcf66629810; AX=N; AX.label='Welcome to React Step' One Edit App.js to change this screen and then come back to see your edits. See Your Changes Press Cmd + R in the simulator to reload your app's code. Debug Press Cmd + D in the simulator or Shake your device to open the React Native debug menu. Learn More Read the docs to discover what to do next: The Basics Explains a Hello World for React Native. Style Covers how to use the prop named style which controls the visuals. Layout React Native uses flexbox for layout, learn how it works. Components The full list of components and APIs inside React Native. Navigation How to handle moving between screens inside your application. Networking How to use the Fetch API in React Native. Help Need more help? There are many other React Native developers who may have the answer. Follow us on Twitter Stay in touch with the community, join in on Q&As and more by following React Native on Twitter.'; AX.frame={{0, 0}, {375, 667}}; AX.activationPoint={187.5, 333.5}; AX.traits='UIAccessibilityTraitNone'; AX.focused='N'; frame={{0, 0}, {375, 667}}; opaque; alpha=1>
`,

  'Step, One': `An assertion failed.
    Exception with Assertion: {
      "Assertion Criteria":  "assertWithMatcher:(((kindOfClass('UILabel') || kindOfClass('UITextField') || kindOfClass('UITextView')) && hasText('_NOT_PRESENT_')) || (kindOfClass('RCTTextView') && an object with accessibilityLabel "_NOT_PRESENT_"))",
      "Element Matcher":  "((!(kindOfClass('RCTScrollView')) && ((respondsToSelector(accessibilityIdentifier) && accessibilityID('heading')) && !(kindOfClass('UIAccessibilityTextFieldElement')))) || (((kindOfClass('UIView') || respondsToSelector(accessibilityContainer)) && parentThatMatches(kindOfClass('RCTScrollView'))) && ((kindOfClass('UIView') || respondsToSelector(accessibilityContainer)) && parentThatMatches(((respondsToSelector(accessibilityIdentifier) && accessibilityID('heading')) && !(kindOfClass('UIAccessibilityTextFieldElement')))))))"
    }


    Error Trace: [
      {
        "Description":  "Assertion with matcher [M] failed: UI element [E] failed to match the following matcher(s): [S]",
        "Description Glossary":    {
          "M":  "(((kindOfClass('UILabel') || kindOfClass('UITextField') || kindOfClass('UITextView')) && hasText('_NOT_PRESENT_')) || (kindOfClass('RCTTextView') && an object with accessibilityLabel "_NOT_PRESENT_"))",
          "E":  "<RCTTextView:0x7fcf6660e2e0; AX=Y; AX.id='heading'; AX.label='Step, One'; AX.frame={{24, 283.5}, {327, 29.5}}; AX.activationPoint={187.5, 298.25}; AX.traits='UIAccessibilityTraitStaticText'; AX.focused='N'; frame={{24, 0}, {327, 29.5}}; alpha=1>",
          "S":  "kindOfClass('UILabel'), kindOfClass('UITextField'), kindOfClass('UITextView'), accessibilityLabel was "Step, One" on <RCTTextView: 0x7fcf6660e2e0; reactTag: 15; text: Step, One frame = (24 0; 327 29.5); opaque = NO; layer = <CALayer: 0x6000020ee020>>"
        },
        "Error Domain":  "com.google.earlgrey.ElementInteractionErrorDomain",
        "Error Code":  "3",
        "File Name":  "GREYAssertions.m",
        "Function Name":  "+[GREYAssertions grey_createAssertionWithMatcher:]_block_invoke",
        "Line":  "75"
      }
    ]

    Hierarchy: <UIWindow:0x7fcf864156d0; AX=N; AX.frame={{0, 0}, {375, 667}}; AX.activationPoint={187.5, 333.5}; AX.traits='UIAccessibilityTraitNone'; AX.focused='N'; frame={{0, 0}, {375, 667}}; opaque; alpha=1>
      |--<RCTRootView:0x7fcf6660b340; AX=N; AX.frame={{0, 0}, {375, 667}}; AX.activationPoint={187.5, 333.5}; AX.traits='UIAccessibilityTraitNone'; AX.focused='N'; frame={{0, 0}, {375, 667}}; opaque; alpha=1>
      |  |--<RCTRootContentView:0x7fcf666212c0; AX=N; AX.label='Welcome to React Step, One Edit App.js to change this screen and then come back to see your edits. See Your Changes Press Cmd + R in the simulator to reload your app's code. Debug Press Cmd + D in the simulator or Shake your device to open the React Native debug menu. Learn More Read the docs to discover what to do next: The Basics Explains a Hello World for React Native. Style Covers how to use the prop named style which controls the visuals. Layout React Native uses flexbox for layout, learn how it works. Components The full list of components and APIs inside React Native. Navigation How to handle moving between screens inside your application. Networking How to use the Fetch API in React Native. Help Need more help? There are many other React Native developers who may have the answer. Follow us on Twitter Stay in touch with the community, join in on Q&As and more by following React Native on Twitter.'; AX.frame={{0, 0}, {375, 667}}; AX.activationPoint={187.5, 333.5}; AX.traits='UIAccessibilityTraitNone'; AX.focused='N'; frame={{0, 0}, {375, 667}}; opaque; alpha=1>
      |  |  |--<RCTView:0x7fcf66629810; AX=N; AX.label='Welcome to React Step, One Edit App.js to change this screen and then come back to see your edits. See Your Changes Press Cmd + R in the simulator to reload your app's code. Debug Press Cmd + D in the simulator or Shake your device to open the React Native debug menu. Learn More Read the docs to discover what to do next: The Basics Explains a Hello World for React Native. Style Covers how to use the prop named style which controls the visuals. Layout React Native uses flexbox for layout, learn how it works. Components The full list of components and APIs inside React Native. Navigation How to handle moving between screens inside your application. Networking How to use the Fetch API in React Native. Help Need more help? There are many other React Native developers who may have the answer. Follow us on Twitter Stay in touch with the community, join in on Q&As and more by following React Native on Twitter.'; AX.frame={{0, 0}, {375, 667}}; AX.activationPoint={187.5, 333.5}; AX.traits='UIAccessibilityTraitNone'; AX.focused='N'; frame={{0, 0}, {375, 667}}; opaque; alpha=1>
`
};

const androidMessages = {
  "Step' One": `'(with text: is "_NOT_PRESENT_" and view has effective visibility=VISIBLE)' doesn't match the selected view.
Expected: (with text: is "_NOT_PRESENT_" and view has effective visibility=VISIBLE)
     Got: "ReactTextView{id=15, visibility=VISIBLE, width=954, height=85, has-focus=false, has-focusable=false, has-window-focus=true, is-clickable=false, is-enabled=true, is-focused=false, is-focusable=false, is-layout-requested=false, is-selected=false, layout-params=android.view.ViewGroup$LayoutParams@7d5cb36, tag=heading, root-is-layout-requested=false, has-input-connection=false, x=63.0, y=84.0, text=Step, One, input-type=0, ime-target=false, has-links=false}"`,

  'Step, One': `'(with text: is "_NOT_PRESENT_" and view has effective visibility=VISIBLE)' doesn't match the selected view.
Expected: (with text: is "_NOT_PRESENT_" and view has effective visibility=VISIBLE)
    Got: "ReactTextView{id=15, visibility=VISIBLE, width=954, height=85, has-focus=false, has-focusable=false, has-window-focus=true, is-clickable=false, is-enabled=true, is-focused=false, is-focusable=false, is-layout-requested=false, is-selected=false, layout-params=android.view.ViewGroup$LayoutParams@7d5cb36, tag=heading, root-is-layout-requested=false, has-input-connection=false, x=63.0, y=84.0, text=Step, One, input-type=0, ime-target=false, has-links=false}"`
};

module.exports = {
  iosMessages,
  androidMessages
};
