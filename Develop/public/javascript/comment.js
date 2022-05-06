const commentFormHandler = async function(event) {
    event.preventDefault();
  
    const postId = document.querySelector('input[name="post-id"]').value;
    const body = document.querySelector('textarea[name="comment-body"]').value;
  
    // Create the functionality to help create the buttons for your website.
    if(body){
      await fetch ('/comment',{
        method: 'POST',
        body: JSON.stringify({
          postId, 
          body
      })
      })
    }
  };
  
  document
    .querySelector('#new-comment-form')
    .addEventListener('submit', commentFormHandler);