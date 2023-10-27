import { useState } from 'react';

export default function StateTextarea() {
  const [form, setForm] = useState({
    comment: `さまざまなフォーム要素を....`
  });

  const handleForm = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const show = () => {
    console.log(`コメント:${form.comment}`);
  }
}