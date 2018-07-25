var budgetController=(function(){
	var Expenses= function(ids,description,vals){
		this.ids=ids;
		this.description=description;
		this.values=vals;
		this.percentage=-1;
	};
	var Income=function(ids,description,vals){
		this.ids=ids;
		this.description=description;
		this.values=vals;
		
	};
	Expenses.prototype.calcPercentage= function(totalIncome){
		if(totalIncome>0){
			this.percentage= Math.round((this.values/totalIncome)*100);
			//console.log(this.percentage);
		}
		else{
			this.percentage=-1;
		}
	};
	Expenses.prototype.returnPercentage=function(){
		return this.percentage;
	};

	var data={
		allItems:{
			income:[],
			expense:[]
		},
		totals:{
			expense:0,
			income:0
		},
		budget:0,
		percentage:-1

	};
	var totalCalculations= function(type){
		var sum=0;
		data.allItems[type].forEach(function(curr){
			sum+=curr.values;

		});
		data.totals[type]=sum;

	};
	return{
		addItem:function(type,des,val){
			var newItem,ID;
			//generate ID
			if(data.allItems[type].length>0){
				ID=(data.allItems[type][data.allItems[type].length -1].ids)+1;
				
			}
			else{
				ID=0;
			}
			//Create new item based on type
			if(type==='expense'){
				newItem=new Expenses(ID,des,val);
			}
			else if(type==='income'){
				newItem= new Income(ID,des,val);
			}
			//Push the item into the all items
			data.allItems[type].push(newItem);
			return newItem;

		},
		returnBudget:function(){
			return{
				budget:data.budget,
				totalInc:data.totals.income,
				totalExp:data.totals.expense,
				percentage:data.percentage
			};
		},
		calculatePercentages:function(){
			data.allItems.expense.forEach(function(curr){
				curr.calcPercentage(data.totals.income);

			});



		},
		getPercentages:function(){
			var allPerc=data.allItems.expense.map(function(curr){
				return curr.returnPercentage();

			});
			return allPerc;

		},
		calculateBudget:function(){
			//calculate Total income and expenses
			totalCalculations('income');
			totalCalculations('expense');

			//calculate the budget (Income -Expenses)
			data.budget= data.totals.income-data.totals.expense;

			//calculate the percentage of income spent
			data.percentage=Math.round((data.totals.expense/data.totals.income)*100);



		},
		testing:function(){
			console.log(data);
		},
		deleteItem:function(type,ID){
			// Deleting the item from the arrays income or expense through ID.
			var ids,index;
			ids= data.allItems[type].map(function(current){
				return current.ids;

			});
			index=ids.indexOf(ID);
			//console.log(index);

			if(index!==-1){
				data.allItems[type].splice(index,1);
			}




		}
	}
})();

var UIcontroller=(function(){
	var DomUI={
		typeSelector:'.add__type',
		description:'.add__description',
		valueSelector:'.add__value',
		buttonSelector:'.add__btn',
		incomeContainer:'.income__list',
		expenseContainer:'.expenses__list',
		budgetLabel:'.budget__value',
		incomeLabel:'.budget__income--value',
		expenseLabel:'.budget__expenses--value',
		percentageLabel:'.budget__expenses--percentage',
		container:'.container',
		expensesPercLabel:'item__percentage'	

	};
	return {
		getInput: function(){
			return{
			 types: document.querySelector(DomUI.typeSelector).value, // We get income / expense
			 description: document.querySelector(DomUI.description).value,
			 val: parseFloat(document.querySelector(DomUI.valueSelector).value)
			};
			
		},
		displayBudget:function(obj){

			document.querySelector(DomUI.budgetLabel).textContent=obj.budget;
			document.querySelector(DomUI.incomeLabel).textContent=obj.totalInc;
			document.querySelector(DomUI.expenseLabel).textContent=obj.totalExp;
			
			if(obj.percentage>0){
				document.querySelector(DomUI.percentageLabel).textContent=obj.percentage+'%';
			}
			else{
				document.querySelector(DomUI.percentageLabel).textContent='--';
			}


		},
		displayPercentages:function(percentages){
			var fields= document.querySelectorAll(DomUI.expensesPercLabel);
			var nodeListForEach= function(list,callback){
				for(var i=0;i<list.length;i++){
					callback(list[i],i);
				}
			};
			nodeListForEach(fields,function(current,index){	
				if(percentages[index]>0){
					current.textContent=percentages[index]+'%';
				}
				else{
					current.textContent='----';
				}
				

			});


		},
		getDomStrings:function(){
			return DomUI;
		},
		addListItem:function(obj,type){
			var html,newHtml,element;
			//Create HTML string with placeHolders
			if(type==='income'){
				element=DomUI.incomeContainer;
				html='<div class="item clearfix" id="income-%id%"> <div class="item__description">%description%</div> <div class="right clearfix">  <div class="item__value">%value%</div><div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';

			}
			else if(type==='expense'){
				element=DomUI.expenseContainer;
				html='<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div> </div></div>';
			}
			
			//Replace the placeHolders with Content
			newHtml=html.replace('%id%',obj.ids);
			newHtml=newHtml.replace('%value%',obj.values);
			newHtml=newHtml.replace('%description%',obj.description);


			//Insert HTML into the DOM
			document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);



		},
		deleteListItem:function(selectorID){
			var element=document.getElementById(selectorID);
			element.parentNode.removeChild(element);

		},

		clearFields: function(){
			var fields,feildsArr
			fields=document.querySelectorAll(DomUI.description+','+DomUI.valueSelector);
			fieldsArr=Array.prototype.slice.call(fields);
			fieldsArr.forEach(function(current,index,array){
				current.value="";
				fieldsArr[0].focus();
			});

		}

	};

})();


var controller=(function(bdgtCont,UIcont){
	var setUpEventListeners=function(){
		var Dom=UIcont.getDomStrings();
		document.querySelector(Dom.buttonSelector).addEventListener('click',ctrlAdditem);
		document.querySelector(Dom.container).addEventListener('click',ctrlDeleteItem);
		document.addEventListener('keypress',function(event){
		if(event.keyCode===13 || event.which===13){
			ctrlAdditem();
		}
	})
	};
	var updateBudget= function(){
		// Calculate Budget
		bdgtCont.calculateBudget();

		// Return Budget
		var budget=bdgtCont.returnBudget();

		// Display the Budget on UI
		UIcont.displayBudget(budget);

	};
	var updatePercentage=function(){
		//1. Calculate the percentages
		bdgtCont.calculatePercentages();

		//2. Read from the Budget Controller
		var percentages=bdgtCont.getPercentages();
		//3. Update the UI
		//console.log(percentages);
		UIcont.displayPercentages(percentages);

	};
	var ctrlAdditem =function(){

		//Get User Input
		var input= UIcont.getInput();
		//Add New Item
		if(input.description!="" && !isNaN(input.val) && input.val>0){
		var newItem= bdgtCont.addItem(input.types,input.description,input.val);
		//Add Item To UI
		UIcont.addListItem(newItem,input.types);	
		// Clear the contents
		UIcont.clearFields();	
		//Calculate and Update budget
		updateBudget();
		// Update Percentages
		updatePercentage();
		}
		
	};
	var ctrlDeleteItem=function(event){
		var itemID,splitID,ID,type;
		itemID=event.target.parentNode.parentNode.parentNode.parentNode.id;
		if(itemID){
			splitID=itemID.split('-');
			type=splitID[0];
			ID=parseInt(splitID[1]);
			//1. Delete from Data Structure
			bdgtCont.deleteItem(type,ID);

			//2. Delete the Item from UI
			UIcont.deleteListItem(itemID);

			//3. Update and show the new Item
			updateBudget();
			//4. Update percentages
			updatePercentage();
		}

	}
	return{
		init: function(){
			UIcont.displayBudget({budget:0,
				totalInc:0,
				totalExp:0,
				percentage:0});
			setUpEventListeners();
		}
	}
})(budgetController,UIcontroller);

controller.init();