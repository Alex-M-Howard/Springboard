import {useRouter} from 'next/router';

function VendingMachine() {
  const router = useRouter();

  if (router.pathname === '/VendingMachine') {
    return <div className="Error-notfound">Not Found</div>;
  }

  return(
    <div>

      <h1>Inside vending machine component</h1>
    </div>
  )
}

export default VendingMachine;