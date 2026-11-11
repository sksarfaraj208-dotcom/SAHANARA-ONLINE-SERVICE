(() => {
  const loginTab=document.getElementById("loginTab");
  const signupTab=document.getElementById("signupTab");
  const form=document.getElementById("authForm");
  const nameInput=document.getElementById("fullName");
  const nameLabel=document.getElementById("nameLabel");
  const password=document.getElementById("password");
  const submit=document.getElementById("authSubmit");
  const message=document.getElementById("authMessage");
  let mode="login";
  let client=null;

  function setMode(next){
    mode=next;
    const signup=mode==="signup";
    loginTab.classList.toggle("active",!signup);
    signupTab.classList.toggle("active",signup);
    nameInput.classList.toggle("hidden",!signup);
    nameLabel.classList.toggle("hidden",!signup);
    nameInput.required=signup;
    password.autocomplete=signup?"new-password":"current-password";
    submit.textContent=signup?"অ্যাকাউন্ট তৈরি করুন":"Login";
    message.textContent="";
  }
  loginTab.addEventListener("click",()=>setMode("login"));
  signupTab.addEventListener("click",()=>setMode("signup"));

  const url=window.SAHANARA_SUPABASE_URL;
  const key=window.SAHANARA_SUPABASE_ANON_KEY;
  const configured=url && key && !url.includes("PASTE_") && !key.includes("PASTE_");
  if(configured && window.supabase?.createClient){
    client=window.supabase.createClient(url,key);
  }

  form.addEventListener("submit",async event=>{
    event.preventDefault();
    if(!client){
      message.textContent="Login চালু করতে আগে Supabase Project তৈরি করে supabase-config.js-এ Project URL ও anon/public key বসাতে হবে।";
      return;
    }
    submit.disabled=true;
    message.textContent="অনুগ্রহ করে অপেক্ষা করুন…";
    const email=document.getElementById("email").value.trim();
    const pass=password.value;
    try{
      let result;
      if(mode==="signup"){
        result=await client.auth.signUp({email,password:pass,options:{data:{full_name:nameInput.value.trim()}}});
      }else{
        result=await client.auth.signInWithPassword({email,password:pass});
      }
      if(result.error) throw result.error;
      message.textContent=mode==="signup"
        ?"অ্যাকাউন্ট তৈরির অনুরোধ সফল। ইমেইল verification চাইলে inbox দেখুন।"
        :"Login সফল হয়েছে। Customer Dashboard পরের ধাপে যুক্ত করা হবে।";
    }catch(error){
      message.textContent=error.message || "এই মুহূর্তে কাজটি করা যায়নি।";
    }finally{
      submit.disabled=false;
    }
  });
})();
