# Atmos Take-Home Assessment (Adarsh Gupta)




## ⚙️ Setup

```bash
$ git clone https://github.com/atmosimpact/take-home-assessment.git atmos-assessment
$ cd atmos-assessment
$ yarn
$ yarn dev
```

## 🎁 Things I did 

#### 1. Implementation of Progress bar:-
The `ProgressBar` component displays a progress bar with a percentage value. It takes `current` and `max` props to calculate the progress. I added some more CSS to make it look unique and also made it mobile responsive


1. Component Structure:
   - The progress bar is wrapped in a container `div` with positioning and a higher `z-index`.
   - Inside, there's a relative `div` with a fixed height of `3` for the progress bar.

2. Progress Bar:
   - The progress bar is an absolute positioned `div` within the container.
   - It has a solid background color and its width is set to `valueAsPercentage`.
   - Transition effects are added to the width for smooth animation.
   - Rounded corners are applied using `borderRadius`.

3. Percentage Text:
   - The percentage text is displayed at the center of the progress bar.
   - It consists of a relative container `div` with a child `span` element.
   - The `span` displays the `value` followed by the percentage symbol.
   - CSS styles are used to center the text using absolute positioning and translation.


#### 2. Debounce:-

The `useDebounceEffect` custom hook is designed for debouncing the save functionality in App.tsx. So it allowed me to call the save Answer API when the user stopped typing and not on all the characters

Implementation Overview:
.

1. Function Signature:
   - The `useDebounceEffect` function takes three parameters: `effect`, `deps`, and `delay`.
   - `effect` is the effect function to be executed after the debounce delay.
   - `deps` is an array of dependencies that trigger the effect when changed.
   - `delay` is the duration in milliseconds to wait before executing the effect.

2. Creating the Debounced Effect:
   - The `callback` is created by memoizing the `effect` function using the `useCallback` hook.
   - Memoization ensures that the `callback` remains the same unless the `deps` change.

3. Setting up the Effect:
   - The `useEffect` hook is used to set up the debounced effect.
   - It runs the effect when the component mounts and whenever the `deps` change.
   - Inside the effect, a timeout is set to execute the `callback` function after the specified `delay` period.
   - The timeout is cleared in the cleanup function to avoid any pending executions if the component unmounts or the `deps` change.


#### 3. Multiple Answer Fields:-

- First of all I changed the questions.json and added list of fields
- Updated 

#### 4. Implement conditional Sequence:-

- This was a interesting problem and I spend lots of time to design its schema but left it because of complex prisma schema and complex functionality in frontend
- Though I know the sort of pseudo algo to implement it nut would like to discuss in the interview and will rather explain the backend repo readme rather than make this readme more longer by adding prisma schema and designing 

#### 5. Implement conditional Sequence:-

- It was first time dealing with vittest, I wrote 21 testcases to cover 6 functionality or components
- Components that I tested are : `Questiion Component`, `ProgressBar`, `PercentageField`, `ButtonField`, `BooleanField`, `NumberField`,  

#### 6. Implement Percentage Field:-
- So for this I created a new Field type `percentage` which is different than Integer field and also created a new component called `PercentField`.
- I used yup to implement the core logic


## 🎁 Extra things I did in frontend

- Made the UI highly mobile responsive each every component has code for responsiveness, (the given project was not mobile responsive)
- Improved UI components like when the description was long or there were lots of element on the page the items used to get squeezed up so made the positioning of all the elements dynamic with the width of the component varying according the length of the elements
- Added commenting and made the code structure best industrial standards
- Added some css to make UI more cleaner for buttons, links, added multiple answer field but tried to make the UI consistent


## 🎯 Tasks

**Backend** _First_, please create a Prisma schema to model the data (both the questions being asked, and individual user's responses (though don't worry about user modeling or auth)) application. This is intentionally left open-ended, so feel free to model it however you'd like. (You can use the `schema.prisma` file as a starting point, if you'd like.) _This is a required task._

**Frontend** _Next_, _within two hours_, please complete as many as possible of the following tasks. They aren't in any particular order, so feel free to tackle them in any order you like. They vary in difficulty, so don't feel like you have to do them all. _Please check off the specific tasks you choose to complete prior to submitting._

- [X] Animate the progress bar without adding new dependencies (using TailwindCSS is preferred).
- [X] Debounce the `save()` function in the App component to avoid unnecessary re-renders and API calls. (Avoid adding a new dependency if possible.)
- [X] Implement a `multiple` question type allowing multiple fields of varying types on one `Question` component.
- [o] Implement a conditional-sequence feature that sets the next question based on current responses. --> Constructed logic though like through Prisma schema and might even implement it if had more time
- [X] Improve the project's test coverage. (Bonus points for fixing any bugs you find!)
- [X] Add a `PercentageField` component for inputting percentage values. Validate input (0-100) using Formik and Yup (optional).

## 📋 Evaluation Criteria

- **Code Quality**: Clean, readable code is the key! We prefer comprehensibility over conciseness.
- **Testing**: Focus on tests covering core functionality. We're not after 100% coverage—prioritize demonstrating your testing skills.
- **Creativity**: Show us interesting, creative solutions, while maintaining code quality.
- **Communication**: Be clear and concise when explaining your thought process and decision-making.

## 🚀 Submission

Fork this repo and reply to your assignment email with a link to a private repo containing your solution. (Keeping the existing commit history earns bonus points!) If you have any questions, don't hesitate to contact us at [wade@atmos.ai](mailto:wade@atmos.ai). We're here to help!


