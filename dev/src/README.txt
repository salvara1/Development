Organization of Components:

            App Component
                  |
                  |
        FilteredList Component
            /            \
           /              \
DisplayList Component   ShoppingCart Component

App Component:

The App component is where I indicate what the product options are as well as
all of the information associated with each product. Each of these products are
represented as a javascript object (or dictionary). This component renders
and passes this product list to the FilteredList component.

FilteredList Component:

The FilteredList component is where all sorting and filtering,
adding and removing items from the cart, and calculating the cart totals functions
are defined i.e.
this is where various states related to cart contents and overall cost are changed;
however, these changes are not rendered directly in the FilteredList component.

This component contains these functions because these functions are used in and
must be passed to both the DisplayList and Shopping Cart components. FilteredList
renders the DisplayList and ShoppingCart components. These Components
render many of the changes that take place in the FilteredList component.

DisplayList Component:

The DisplayList is the component where all filtering and sorting options are rendered
and triggered. This component also renders all of the products that were sorted and
filtered in the FilteredList component. This is also where the user can select and
trigger the add to cart option.

ShoppingCart Component:

This component renders the cart contents determined and passed by the
filteredlist component. This rendering includes the quantity as well as the option
to increment or decrement the quantity of an existing item in the cart which triggers
the add and remove functions found in the FilteredList component. The user
can also remove an entire type of product (making the quantity 0) by triggering the
removeAll() function found in FilteredList.

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

How is data passed down through components?

1. App's state includes
  - OPTIONS: the available product options

  How is this data passed down?
  a. FilteredList: OPTIONS is passed as props to filtered list
  b. DisplayList: OPTIONS is filtered and sorted based on SIZE, SEASON, SORT types
     indicated in the FilteredList state and then passed down as props to DisplayList

2. FilteredList's state includes:
  - FILTER BY SIZE OPTION: this is used to indicate what kind of filtering if any is based on size
  - FILTER BY SEASON OPTION: this is used to indicate what kind of filtering if any is based on season
  - SORT TYPE: indicates what sorting criteria exists
  - CART TOTAL: total cost of items in cart
  - CART CONTENTS: dictionary containing all of the items within the cart and how many of each.

  How is this data passed down?
  a. ShoppingCart: CART TOTAL is calculated in FilteredList and then passed
     down to as ShoppingCart as props to be rendered there.
  b. ShoppingCart: CART CONTENTS is created and updated in the FilteredList and
     then passed down as props to ShoppingCart to be rendered there.
  c. ShoppingCart: Functions removeOne(), removeAll(), and addToCart() are all
     passed as props, too.
  d. DisplayList: Functions addToCart(), onSortByPrice(), onSelectFilterSize(),
     and onSelectFilterSeason() were passed as props

How does the user trigger state changes?

SIZE value:

- change triggered in DisplayList
- FILTER BY SIZE: If the user selects a filter by size option from the drop
  down, the onSelectFilterSize() function from the FilteredList component will
  be triggered. This function updates FilteredList's state "size" value to
  the event key sent by the filter option that was selected.

SEASON value:
- change triggered in DisplayList
- FILTER BY SEASON: If the user selects a filter by season option, the onSelectFilterSeason()
  function will be triggered and the FilteredList's state "season" value will
  be updated to the event key sent by the selected filter option.

SORT value:
- change triggered in DisplayList
- SORT BY PRICE: If the user selects a sorting option, the onSortByPrice()
  function will be triggered and the "sort" value of FilteredList's state
  will be updated to the appropriate event key.

CARTCONTENTS value:
- change triggered in DisplayList and ShoppingCart
- DisplayList:
  - When the user clicks the add to cart button under a product, the addToCart()
    function is triggered. This function will use the "CARTCONTENTS" value from
    the state to determine whether to increase the quantity of an existing item
    in the list-- or it will add the current item to the list. It will then update
    the "CARTCONTENTS" value of the FilteredList state to reflect any changes.
- ShoppingCart:
  - DECREMENT: When the user clicks "-", removeOne() is triggered and the quantity is adjusted
    to reflect the change. The function then updates "CARTCONTENTS" to reflect
    any changes in the value.
  - INCREMENT: When  the user clicks "+", addToCart() is triggered and the quantity
    is adjusted. The function then updates "CARTCONTENTS" to reflect any changes.
  - REMOVE ALL: When the user clicks "x", removeAll() is triggered and the quantity
    of one item is updated to equal 0 and is therefore removed from "CARTCONTENTS"
    entirely. The state is updated to reflect the change.

CART TOTAL value:
  - change triggered in DisplayList and ShoppingCart
  - if the user uses Add to Cart, Increment, Decrement, or remove item functionality,
    the associated functions are triggered and the "CartTotal" value of the state
    is updated when the calculateTotal() is called in each of the named functions.
