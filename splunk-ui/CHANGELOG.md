Change Log
============

0.9.4 - August 16, 2017
----------
Bug Fix:
* In Firefox, `Popover` now closes when clicking away to a `Text` component (SUI-1030).

0.9.3 - May 2, 2017
----------

Bug Fix:
* Fixes `data-component` attributes for splunk-ui-docs.

0.9.2 - April 28, 2017
----------

Bug Fixes:
* Adds css reset to drag style on `Table.HeaderCell`.
* `Menu` now handles invalid elements correctly.

0.9.1 - April 27, 2017
----------

Bug Fix:
* `Select` with filter restores keyboard interaction for selecting options.

0.9.0 - April 20, 2017
----------

API Changes:
* `Date` no longer attempts to automatically set the locale. Use the new `locale` prop.
* `ControlGroup` `Help` subcomponent was removed.
* `FormRows` no longer requires the `sortable` prop on the container or the `Row`. The presence of the `onRequestMove` callback will enable sorting.
* `Grid` was renamed to `ColumnLayout` and:
    * `gutter` now uses pixels rather than rems.
    * The default `gutter` is now 30.
    * `Column` `span` props must add up to 12.
    * `Column` can now be styled when using gutters.
* `Menu` `useSyntheticScroll` prop was renamed to `stopScrollPropagation`.
* `RadioBar` no longer supports `'primary'` `appearance`.
* `StepBar.Step` no longer supports the `label` prop. Use `children` instead.
* `Table`
    * `maxHeight` and `style` props are no longer supported. Use new `tableStyle`, `innerStyle`, and/or `outerStyle` props instead.
    * `HeaderCell` text now truncates instead of wrapping by default. Set the new `truncate` prop to `false` to enable wrapping.
    * `HeaderCell` text cannot be center or right aligned using inline styles. Use the `align` prop instead.
* `WaitSpinner` no longer supports the `color` prop.
* Icons:
    * Renamed `Export` to `Download`.
    * Renamed `X` to `Clear`.
    * Renamed `AlertTriangle` to `Warning`.
    * Renamed `CheckCircle` to `Success`.
    * Removed `MinusCircle`, `AlertCircle`, `QuestionCircle`, `PlusCircle`, and `XCircle`.

New Features:
* `Table`:
    * Resizable columns,
    * Reorderable columns,
    * `onScroll` prop,
    * `HeaderCell` now supports an `align` and `truncate` props for text.
    * `Cell` now supports an `align` for text.
* `Menu`, `ComboBox`, `Multiselect`, and `Select` have a new `Heading` subcomponent for grouping items and options.
* `Scroll` component added. It can be used to stop scroll propagation and animate scrolling.
* `Select` `appearance` prop now support `'link'`.
* `Paginator` now has an `alwaysShowLastPageLink` prop.
* `Color` supports `error` and `disabled` props.
* `FormRows` now supports a `header` prop.

Style Changes:
* `File` now has a larger drop target.
* `StepBar` has a simplified appearance.
* Normalized margins between content elements including `Paragraphs`, `Heading`, and `List`. It may be necessary to update margin from these components to maintain current layout.
* New design for `Refresh` icon.
* Updated `Heading` styles.
* In `ControlGroup`, increased spacing between help and controls.

Bug Fixes:
* The `autoCloseWhenOffScreen` prop in `Popover` now closes when the anchor is not visible in it's scroll container, not just the window.
* `Paginator` correctly handles the case where `numPageLinks` is greater than `totalPages`.
* All components now correctly handle children with non-rendered values such as `false` and `null`.
* `Table`:
    * Inconsistencies across browsers in `Table` head cell text alignment has been resolved.
    * All callbacks are now cleared before unmount.
* `FormRows` can be reordered in a `Modal` and `Popover`.
* Icons no longer take focus when tabbing in IE.


0.8.1 - March 17, 2017
----------

Bug Fixes:
* Scrolling Menus work with trackpads.
* Fixed issue in `TransitionOpen` related to `takeFocus`.

0.8.0 - March 15, 2017
----------
New Features:
* New components:
    * `FormRows`
    * `SidePanel`
    * `Grid`
    * `Clickable`
* Compact mode in `Multiselect`.
* Disabled prop in `RadioList`.
* Added `Refresh` icon.
* `TransitionOpen` supports `takeFocus` and `retainFocus` props.

Bug Fixes:
* Fixed accessibility issues with `StepBar` and `JSONTree`.
* The `truncate` prop in `Menu.Item` now works with descriptions.
* `Slider` now works correctly in IE11.
* `Concertina` and `Accordion` no longer throws an error on non-rendered children.
* Disabled options in `Select`, `Multiselect`, and `ComboBox` are no longer selectable via the keyboard.
* Falsey option values in `Select`, `Multiselect`, and `ComboBox` can now be selected via the keyboard.

0.7.3 - March 17, 2017
----------

Bug Fixes:
* Scrolling Menus work with trackpads.

0.7.2 - March 9, 2017
----------
* Adds test hooks to `Table` components.

0.7.1 - March 1, 2017
----------
New Features:
* `Multiselect` accepts a `menuStyle` prop, like `ComboBox`.
* `Multiselect` has a `max-height`, after which it scrolls. This can be overridden with inline styles.

Bug Fixes:
* `Multiselect` now calls `onFilterChange` when the user selects a value, which clears the filter.
* `Multiselect`'s menu is now always the same width as the input, unless it is smaller than 200px.
* `Multiselect` clears the use input on click away.
* `Slider` now conforms to controlled and uncontrolled patterns.
* `Slider` rounds floating point errors to conform to step value.
* `Number` preserves it's display string when value is uncontrolled and it receives new props.
* Animation names are no longer minimized, which caused naming conflicts.

0.7.0 - February 17, 2017
----------
API Changes:
* `Number` no longer supports `append` and `prepend` at the same time.
* `Multiselect` now returns the event, item index and item name when the user requests to removed an
  item.
* `File`'s callback handlers have been renamed and revised:
    * `onAddFiles` changed to `onRequestAdd`.
    * `onRemoveFile` changed to `onRequestRemove`.
    * `onRequestRemove` is passed an object with three properties: `event`, `name`, and `index`.

Style Changes:
* `Number`'s appearance has changed.
* `Multiselect` was not correctly expanding when the inline prop was set to false. This may affect
  layout in some scenarios.
* `Modal.Header` has changes that may affect layout when children are added instead of
  or in addition to the `title` prop.
* `Slider` no longer has left margin.

Bug Fixes:
* `Button`s have a `type=button` so they no longer act as submit buttons by default.
* At least one code example had missing text.

0.6.4 - March 17, 2017
----------

Bug Fixes:
* Scrolling Menus work with trackpads.

0.6.3 - February 14, 2017
----------

Bug Fixes:
* `Multiselect` styles are now consistent with `Text`.
* New values in `Multiselect` are now added on click.
* `TransitionOpen` makes overflowing content visible once the opening animation completes.

0.6.2 - February 3, 2017
----------

New Features:
* `JSONTree` for displaying and exploring JSON data.

Bug Fixes:
* A `Dropdown` inside a `Dropdown` now closes as specified on content clicks.
* `SlidingPanels` handles content that changes size.
* Fixed the error state for `File` where the border was partially obscured.


0.6.1 - February 1, 2017
----------

Bug Fixes:
* Fixed a few `ComboBox` user experience issues related to when the popover opens and closes.
* Fixed an issue where `Popover` could briefly appear in the wrong location when animation was
  set to false.
* Updated `Tooltip` styles to match standards.

0.6.0 - January 23, 2017
-----------

API Changes:
* Icons underwent a large refactor, including:
    * Icons have been separated into their own files and moved to their own directory.
        * Before: `import { Code } from 'splunk-ui/components/Icon'`
        * Now: `import Code from 'splunk-ui/icons/Code';`
        * This improves consumers bundle size. They only get the icon files they use.
    * The `square` prop was removed, and `height` and `width` props added.
    * The `size` prop now supports a string for setting a value with unit.
    * The `ornamental` prop was removed from Icon. `screenReaderText` can be set to `null` or
      empty string instead.
* `Collapsible` was replaced with `TransitionOpen`, which supports a variety of animation types.
* The API for `Modal` and `Modal.Header` were updated to conform to our standard API used elsewhere.
    * The `onClose` callback was replaced with `onRequestClose`, which is now passed a reason and an
    event.
    * The `enableClickAway` and `enableEscClose` props were removed. Use the reason provided by the
    `onRequestClose` callback instead.
* In the `Date` component, the `defaultDate` prop has been replaced with `defaultValue` to be more
consistent with the API of other components. See also, the new controlled mode below.
* In the `Text` component, the `rows` prop has been renamed to `rowsMin`.
* The `Calendar` component has been removed.

New Features:
* New components:
    * `Code` for displaying code snippets with syntax highlighting.
    * `Markdown` parses and renders markdown.
        * Renders to Splunk-UI components when appropriate.
        * No injection of html.
        * Useful in conjunction with i18n to translate text with links and such.
* Many components now support a `size` prop.
    * `Button`, `Color`, `ComboBox`, `ControlGroup`, `Date`, `File`, `MultiSelect`, `Number`,
    `RadioBar`, `Select`, `StaticContent`, `Switch`, `Text`
* UI for server-side fetching with `Select`, `MultiSelect`, and `ComboBox`.
* Support for `autofocus` in the `Text` component.
* The `Date` component now supports a controlled mode and the `value` prop.
* `File` now supports an error state.

Bug Fixes:
* Tabbing within the `Color` palette now works as expected.
* Improved scrolling behavior in `Menu`, `Select`, `MultiSelect`, and `ComboBox`.
    * Scroll no longer propagates to parent.
    * Highlighted item is now kept in view when navigating with arrow keys.
* `File` now works correctly in FireFox.
* `Modal` is now passes arbitrary props to it's container.
* `Popover` now supports `open` being true on the initial render.
* Corrected styles for `Text` when it is both in error and in focus.
* `Button` now supports setting the label with a string as a child.
* Transitions no longer throw errors when the component is unmounted during the transition. We have
migrated our animations to React Motion.
* The theme loader now verifies the existence of `/services/server/info` in
`window._splunkd_partials_` before accessing it, preventing it from throwing an error.


0.5.2 - December 14, 2016
-----------

Bug Fix:
* Fixed bug on Safari where key presses were not handled correctly.
* Arbitrary props now correctly passed to Modal.

0.5.1 - December 9, 2016
-----------

Bug Fix:
* Fixed bug on Safari where the page scrolled on the in initial open of a `Dropdown` or `Select`.

0.5.0 - December 6, 2016
-----------

API Changes:
* `onChange` prop is no longer required when `value` prop is set in `Text`.

New Features:
* New components:
    * `Color` for entering a hex color.
    * `File` for uploading and displaying one or more files.
    * `Progress` for showing the progress of an action.
    * `SlidingPanels` for animating the transition between multiple interfaces.
    * `Slider` for entering a number in a defined range.
* `Select`, `Dropdown`, and `Menu`
    * Added support for arrow key navigation.
    * Can use enter key to select an item when filtering in `Select`.
    * Improved accessibility attributes.
* `Table` now supports `tableStyle` prop.

Bug Fixes:
* `Text` no longer throws error when it is under multiline mode and switching from enable to disable.
* Fixed error and disabled states for `Multiselect`.

Other:
* Examples updated to use the class properties syntax.

0.4.1 - November 22, 2016
-----------

Bug Fixes:
* `Select` no longer vibrates when using max and min width.

0.4.0 - November 22, 2016
-----------

API Changes:
* When using the `isMenu` prop on a `Button`, the label is now aligned to the left and the caret to the right.
* `Popover`:
    * The placement algorithm got a major refactor to make it more performant and flexible.
    * `placement` prop renamed to `defaultPlacement` to better reflect that it might not be the final placement.
    * In addition to `above`, `below`, `left`, and `right`, `defaultPlacement` now supports `vertical` and `horizontal` modes.
    * The `canCoverAnchor` prop was added, allowing the `Popover` to cover the anchor if there is not enough space in a direction to accommodate it.
    * `repositionMode` replaced `canAutoPosition` and provides three options: `none`, `flip`, or `any`. `canAutoPosition` is no longer available.
    * `anchor` replaced `anchorEl`. This no longer needs to be a DOM element. Any React or DOM element will work.
    * The scale animation was removed. Dropdown and Select fade in.
* `Dropdown` changed in similar ways to `Popover`:
    * `placement` is now `defaultPlacement`.
    * `canCoverAnchor` was added.
    * `repositionMode` replaced `canAutoPosition`.
* `Tooltip`s `placement` prop was renamed to `defaultPlacement`.
* `DatePicker` renamed to `Date`.
* `Paginator` now renders nothing if there is only one page.
* Reduced spacing between `ControlGroup`s.

New Features:
* New Components:
    * `ComboBox`
    * `TabLayout`
    * `StepBar`
* `Select`:
    * Supports error states.
    * Menu size now relative to toggle size.

Bug Fixes:
* `Concertina`:
    * Rendering issues on Safari.
    * Correctly accommodates children that change size.
* `Collapsible` handles the removal of its node with out throwing.

0.3.2 - November 16, 2016
-----------

Bug Fixes:
* `Paginator` no longer adds Ellipses or a link to the first page when all page links can be shown.

0.3.1 - November 10, 2016
-----------

Bug Fixes:
* Corrects error in `Calendar` example in docs.

0.3.0 - November 9, 2016
-----------

API Changes:
* `Select.Option` now accepts any type for the `value` prop.
* `Accordion` prop `onRequestOpen` changed to `onChange` and now has the format `(event, data)`.
* `Text` prop `elementId` changed to `inputId`.

New Features:
* New components:
    * `Concertina`
    * `DatePicker`
    * `Multiselect`
    * `Number` (input control)
    * `TabBar`
* `Switch`:
    * New `toggle` appearance.
    * Now supports `disabled` prop.
* Focus methods added to `Select` and `Dropdown`.
* Better font handling. See the Fonts section of the [Getting Started](GettingStarted) page.
* Better handling of aria attributes.

Bug Fixes:
* `ControlGroup`s in error correctly display red labels.

0.2.1 - October 28, 2016
-----------

Bug Fixes:
* Focus style on `Table` `HeadCell` no longer shows content underneath it.
* Corrects position of `Popover` when browser is zoomed and position numbers are rounded.

0.2.0 - October 27, 2016
-----------
Overview:
This release contains a major refactor of how state is managed by our components. Many components now support both the controlled and uncontrolled patterns. In general, to use the controlled pattern, set the `propName` and to use the uncontrolled pattern set the `defaultPropName`. See [React Forms Documentation](https://facebook.github.io/react/docs/forms.html) for more details on these patterns and the detailed notes below for impacts on Splunk UI. We also standardized the api for components that open and close with `onRequestOpen` and `onRequestClose` callbacks.

API Changes:
* `Dropdown` now supports both the controlled and uncontrolled patterns for open. To use the controlled pattern, use the `open` prop and to use the uncontrolled use `defaultOpen`.
* `Accordion`:
    * Now only supports a single panel. Use `CollapsiblePanel` when `Accordion` does not provide the necessary functionality.
    * `Accordion.Section` was renamed to `Accordion.Panel`.
    * `active` prop was replaced with the `openPanelId` prop.
    * Now supports both the controlled and uncontrolled patterns for the `openPanelId` prop.
* `RadioBar`:
    * Renamed `Radio` to `RadioBar`.
    * Renamed `Radio.Button` to `RadioBar.Option`.
    * Now supports both the controlled and uncontrolled patterns for the `value` prop.
* `RadioList`:
    * Renamed `RadioList.Item` to `RadioList.Option`.
    * Now supports both the controlled and uncontrolled patterns for the `value` prop.
* `Select`:
    * Renamed `Select.Item` to `Select.Option`.
    * Now supports both the controlled and uncontrolled patterns for the `value` prop.
* `Text` now supports both the controlled and uncontrolled patterns for the `value` prop.
* `Tooltip` now provides the `onRequestOpen` and `onRequestClose` props for use in controlling the `open` prop. The uncontrolled pattern is still supported, but there is no `defaultOpen` prop.

New Features:
* Sortable column headers in `Table`.
* Expandable rows in `Table`.
* New `StaticContent` component for showing well formatted static content in a `ControlGroup`.
* `Button` and `Link` now have a `focus` method.
* Splunk configuration data is now available through the `splunk-ui/util/splunkConfig` module.
* New `CollapsiblePanel` component. This was a subcomponent of `Accordion`, but was moved to its own component to provide greater flexibility.

Bug Fixes:
* Removed hover styles from `Accordion` Head.
* `Dropdown`s no longer scroll the page and close on Safari.
* The clear button now works for `Text`s with the `search` appearance.
* `Popover` now positions correctly when the trigger is partly off the bottom of the screen.
* Fixes the error in RadioList in production mode where `propTypes` was undefined.
* `Table`'s docking head now works on IE11.
* `Modal.Body` now scrolls correctly on IE11.
* `Tooltip` array now fades correctly on IE11.

0.1.3 - October 19, 2016
-----------
Bug Fixes:
* Popover now correctly centers vertically when positioned right or left.

0.1.2 - October 13, 2016
-----------
Bug Fixes:
* ControlGroup now handles arbitrary children correctly.

0.1.1 - October 13, 2016
-----------
Bug Fixes:
* Removes eval source map from production.

0.1.0 - October 12, 2016
-----------
API Changes:
* **React and associated packages are now peerDependencies and must be added per project.** Add the following dependencies to your project's package.json:
    * react ^15.3.1
    * react-addons-css-transition-group ^15.3.1
    * react-addons-transition-group ^15.3.1
* **`className` has been removed from props in all components.** Prefer inline styles or wrappers for adjusting layout. See the [Getting Started](GettingStarted) page in docs for details.
* Changed Text prop autocomplete renamed to autoComplete.
* Changed the Control Group's default layout from 'fillJoin' to 'fill'.
* Control Group's 'none' layout no longer makes children inline. If required, add this prop
manually to each child.

New Features:
* New DefinitionList component.
* Support for Splunk Light styles when `__splunkd_partials__` are loaded.
* Instructions and best practices added to docs about styling and coding practices.
* Version number added to docs.
* Select includes a configurable placeholder.
* Internationalization utility that works with Splunk's internationalization tooling.

Bug Fixes:
* Restored clear button on Text component.
* Prevent Select menus from growing taller than the viewport.
* Select and Dropdown components no longer take focus when scrolled off screen.
* Other miscellaneous small fixes and improvements.

0.0.7 - October 3, 2016
------------
API Changes:
* Icons changed to SVG. Each icon is a separate component instead of a property of Icon.
* Button, Menu.Item and Select.Item now require a node for the icon property, such as and
instantiated Icon or svg, instead of an icon string.
* Logos are moved to a new component.
* Message has a "type" property instead of an "iconType" property.

New Features:
* Buttons support hrefs via the "to" property.
* Links can be disabled.
* Popovers, Select, Dropdown and Modal implement circular tabbing for keyboard access.
* Select and Dropdown will return focus to the toggle when closed.
* Menu items can include links.
* New Change Log that also appears in the documentation.

Bug Fixes:
* The filter in Select does not create warnings.
* Select does not reposition when filtering.

0.0.6 - September 28, 2016
------------
API Changes:
* Buttons "menu" property renamed to "isMenu".
* ControlRadio component renamed to Radio.
* ControlRadioList component renamed to RadioList.
* ControlSelect component renamed to Select.
* ControlText component renamed to Text.

New Features:
* New Table component supporting docking and fixed headers.
* New List component for ordered and unordered lists.
* New Paragraph component.
* Text component supports multi-line.
* Select component can optionally include a filter field.
* Control Group and Text support an error state.

Bug Fixes:
* ControlSelect did not trigger onChange.

0.0.5- September 19, 2016
------------
