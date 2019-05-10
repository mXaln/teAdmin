/* global test describe expect it */
import store from '../js/store';
const initialState =
'{"Projects":{"currentProjectQuery":"","error":"","loading":false,"projects":Array[]},"direction":{"direction":"ltr"},"geolocation":{"txt":{"alreadyPublished":"You can only have one publised take, UNPUBLISH first","availableUsers":"Available Users","backToLogin":"Back to Login","board":"Board","chapter":"Chapter","chunk":"Chunk","commentSaved":"Your comment has been saved.","confirm":"Confirm","continue":"Continue","deleteTake":"Are you sure you want to delete this Take?","deletingComment":"Deleting comment","deletingTake":"Deleting Take...","download":"Download","dragHere":"Drag Here","error":"There was an Error!","generatingUser":"Generating User","githubSignIn":"Github Sign in","goBack":"Go Back","goToNextChapter":"Next Chapter","goToNextChunk":"Next Chunk","goToNextVerse":"Next Verse","goToProjects":"Go to projects","internetError":"Please check your internet connection, if everything seems to work fine it is our fault, we will fix it soon, sorry.","isThisOk":"Is this ok?","languages":"Languages","level":"Level","loadMore":"Load More","loading":"Loading...","logOut":"Log Out","micError":"Microphone Error","micInstructions":"Make sure you allow microphone access.","micMessage":"It appears as if there was an error recording your name.","new":"New","newUser":"New User","noCommentsAvailable":"No Comments Available","ok":"Ok","pleaseWait":"Please wait...","privacyText":"If you are concerned for your privacy or safety, please use a nickname or pseudonym.","progressPage":"Progress Page","projects":"Projects","record":"Record","recordYourComment":"Record your Comment","recording":"Recording...","redo":"Redo","review":"Review","selected":"Selected","success":"Success!","take":"Take","uhOh":"Uh-ho...","unavailable":"Unavailable","undo":"Undo","uploadError":"Upload Error","uploadErrorInfo":"There was an error uploading your comment.","uploading":"uploading...","verse":"Verse","whatIsYourName":"What is your name?","yes":"Yes","youAreReadyToGo":"You are ready to go!"}},"user":{"audioName":"","hash":"","loading":false,"loggedInUser":null,"socialLogin":false,"tempUserId":null,"userCreated":false,"users":Array[]}}';


describe.skip('test store initialization', ()=> {
  expect(store.getState().toString()).toEqual(initialState);
});
